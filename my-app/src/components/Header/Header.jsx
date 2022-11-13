import Logo from "../img/Logo_red.png"

function Header() {
    if(window.location.pathname === "/") {
        return (
            <header style={{display:'flex', justifyContent:'space-between',paddingLeft:'100px',paddingRight:'100px', alignItems:'center'}}>
                <img src={Logo} alt="Logo Kasa" style={{display:'block',paddingTop:'30px',paddingBottom:'40px'}}/>
                    <div>
                        <nav>
                            <ul style={{display:'flex',flexDirection:'row',listStyleType:'none',}}>
                                <li style={{paddingLeft:'57px'}}><a href="/" style={{color:'#FF6060', textDecoration:'revert'}}>Accueil</a></li>
                                <li style={{paddingLeft:'57px'}}><a href="/about" style={{color:'#FF6060'}}>A Propos</a></li>
                            </ul>
                        </nav>
                    </div>
            </header>
        )
    } else if(window.location.pathname === "/about") {
        return (
            <header style={{display:'flex', justifyContent:'space-between',paddingLeft:'100px',paddingRight:'100px', alignItems:'center'}}>
                <img src={Logo} alt="Logo Kasa" style={{display:'block',paddingTop:'30px',paddingBottom:'40px'}}/>
                    <div>
                        <nav>
                            <ul style={{display:'flex',flexDirection:'row',listStyleType:'none',}}>
                                <li style={{paddingLeft:'57px'}}><a href="/" style={{color:'#FF6060'}}>Accueil</a></li>
                                <li style={{paddingLeft:'57px'}}><a href="/about" style={{color:'#FF6060', textDecoration:'revert'}}>A Propos</a></li>
                            </ul>
                        </nav>
                    </div>
            </header>
        )
    } else {
        return (
            <header style={{display:'flex', justifyContent:'space-between',paddingLeft:'100px',paddingRight:'100px', alignItems:'center'}}>
                <img src={Logo} alt="Logo Kasa" style={{display:'block',paddingTop:'30px',paddingBottom:'40px'}}/>
                    <div>
                        <nav>
                            <ul style={{display:'flex',flexDirection:'row',listStyleType:'none',}}>
                                <li style={{paddingLeft:'57px'}}><a href="/" style={{color:'#FF6060'}}>Accueil</a></li>
                                <li style={{paddingLeft:'57px'}}><a href="/about" style={{color:'#FF6060'}}>A Propos</a></li>
                            </ul>
                        </nav>
                    </div>
            </header>
        )
    }
      
}
export default Header;