import { ReactComponent as Githubicon } from "assets/img/github.svg"
import { ReactComponent as Linkedinicon } from "assets/img/linkedin.svg"

import "./styles.css";
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="novafilmes-nav-content">
                    <h1>NOVA FILMES</h1>
                    <a href="https://github.com/OliveiraGusta">
                        <div className="novafilmes-contact-container">
                            < Githubicon className="navbar-icon" />
                            <p className="novafilmes-contact-link">/OliveiraGusta</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/oliveiragusta/">
                        <div className="novafilmes-contact-container">
                            < Linkedinicon className="navbar-icon"  />
                            <p className="novafilmes-contact-link">/OliveiraGusta</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}
export default Navbar;