import Logo from "../img/Logo_red.png"
import './header.css'

function Header() {

    function toChooseStyle(page) {
        switch (page) {
            case "home":
                return (
                    <ul className="nav">
                        <li className="box-links"><a className="links underlined" href="/">Accueil</a></li>
                        <li className="box-links"><a className="links" href="/about">A Propos</a></li>
                    </ul>
                )
            
            case "about" :
                return (
                    <ul className="nav">
                        <li className="box-links"><a className="links" href="/">Accueil</a></li>
                        <li className="box-links"><a className="links underlined" href="/about">A Propos</a></li>
                    </ul>
                )
            
            default :
                return (
                    <ul className="nav">
                        <li className="box-links"><a className="links" href="/">Accueil</a></li>
                        <li className="box-links"><a className="links" href="/about">A Propos</a></li>
                    </ul>
                )
        }
    }

    if(window.location.pathname === "/") {
        return(
            <header>
                <img className="logo" src={Logo} alt="Logo Kasa"/>
                    <div>
                        <nav>
                            {toChooseStyle("home")}
                        </nav>
                    </div>
            </header>
        )
    } else if(window.location.pathname === "/about") {
        return(
            <header>
                <img className="logo" src={Logo} alt="Logo Kasa"/>
                    <div>
                        <nav>
                            {toChooseStyle("about")}
                        </nav>
                    </div>
            </header>
        )
    } else  {
        return(
            <header>
                <img className="logo" src={Logo} alt="Logo Kasa"/>
                    <div>
                        <nav>
                            {toChooseStyle("default")}
                        </nav>
                    </div>
            </header>
        )
    }
}
export default Header;