import Cancha from "../models/Cancha.js";
import NumCancha from "../models/NumCancha.js";
import { createError } from "../utils/error.js";

export const createNumCancha = async (req,res,next) =>{

    const canchaId= req.params.canchaId;
    const newNumCancha = new NumCancha (req.body);

    try {
        const savedNumCancha = await newNumCancha.save()
        try {
            await Cancha.findByIdAndUpdate(canchaId, {
                $push: {numCanchas: savedNumCancha._id},
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedNumCancha);
    } catch (err) {
        next(err);
    }
};

export const updateNumCancha = async (req,res,next) => {

    try{
    const updateNumCancha = await Cancha.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new:true});

        res.status(200).json(updateNumCancha)

    }catch(err){
        next(err);
    }
}
export const deleteNumCancha = async (req,res,next) => {
    const canchaId= req.params.canchaId;

    try{
        await NumCancha.findByIdAndDelete(req.params.id );
        try {
            await Cancha.findByIdAndUpdate(canchaId, {
                $pull: {numCanchas: req.params.id},
            });
        } catch (err) {
            next(err);
        }   
       res.status(200).json("La cancha ha sido eliminada.")
   }catch(err){
        next(err);
    }
}
export const getNumCancha = async (req,res,next) => {

    try{
        const numcancha = await NumCancha.findById(
            req.params.id
        );   
        res.status(200).json(numcancha);

    }catch(err){
        next(err);
    }
}
export const getNumCanchas = async (req,res,next) => {
    try{
        const numCanchas = await NumCancha.find();   
        res.status(200).json(numCanchas);
    }catch(err){
        next(err);
    }
}