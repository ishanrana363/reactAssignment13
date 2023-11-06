import "../FooterComponent/FooterCSS/Pages.css"
const Pages = () => {
    return (
        <div>
            <footer>
                <div className= "pageList" >
                    <h1>Pages</h1>
                        <ul>
                            <li>
                                Make Payment
                            </li>
                            <li>
                                Contact
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Start Up Valuation
                            </li>
                            <li>
                                Virtual CFo
                            </li>
                            <li>
                                Compliances
                            </li>
                        </ul>

                    <div className="Free-Tools" >
                        <h2>Free Tools </h2>
                        <li>Company Incorporation</li>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Pages;

