import { ReactComponent as Githubicon } from "assets/img/github.svg"
import "./style.css";
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="novafilmes-nav-content">
                    <h1>NOVA FILMES</h1>
                    <a href="https://github.com/OliveiraGusta">
                        <div className="novafilmes-contact-container">
                            < Githubicon />
                            <p className="novafilmes-contact-link">/OliveiraGusta</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}
export default Navbar;