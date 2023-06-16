import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import CanchasList from "../../components/canchasList/CanchasList";
import FeaturedCanchas from "../../components/featuredCanchas/FeaturedCanchas";
import Footer from "../../components/footer/Footer";


const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Navegar por tipo de cancha</h1>
                <CanchasList/>
                <h1 className="homeTitle">Canchas más visitadas</h1>
                <FeaturedCanchas/>
            <MailList/>
            <Footer/>
            </div>
        </>
    );
};

export default Home; 