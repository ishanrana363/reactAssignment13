import Pages from "./FooterComponent/Pages.jsx";
import Register from "./FooterComponent/Register.jsx";
import Legal from "./FooterComponent/Legal.jsx";
import SocialPresence from "./FooterComponent/SocialPresence.jsx";
import "../HomeComponentCSS/footer.css"
const Footer = () => {
    return (
        <div className= "footer" >
            <div className= "container" >
                <footer>
                    <Pages/>
                    <Register/>
                    <Legal/>
                    <SocialPresence/>
                </footer>
            </div>
        </div>
    );
};

export default Footer;