import "../FooterComponent/FooterCSS/Social.css"
const SocialPresence = () => {
    return (
        <div>
            <footer>
                <div className= "Social" >
                    <h1>Social Presence </h1>

                        <ul>
                            <li>
                                Facebook
                            </li>
                            <li>
                                Linkedin
                            </li>
                            <li>
                                Twitter
                            </li>
                        </ul>

                    <div className= "Reach" >
                        <h1>
                            Reach Us
                        </h1>
                        <p>
                            Starters’ CFO Private Limited <br/>
                            243, 2nd floor, Gujrawala Town, Part 3, <br/>
                            Delhi - 110009 <br/>
                            Opp HDFC Bank, Near Pentamed Hospital <br/>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SocialPresence;