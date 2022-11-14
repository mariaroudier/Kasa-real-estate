import Logo from "../img/Logo_white.png"

function Footer() {
    if(window.location.pathname !== "/notfound") {  
        return (
            <footer style={{
                backgroundColor: 'black'}}>
                <img src={Logo} alt="Logo Kasa" style={{
                    display:'block',
                    marginLeft:'auto',
                    marginRight:'auto',
                    paddingTop:'56px',
                    paddingBottom:'20px'
                }}/>
                <p style={{
                    color: 'white',
                    textAlign: 'center',
                    paddingBottom:'20px'
                }}>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}
export default Footer;