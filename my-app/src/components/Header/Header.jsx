import Logo from "../img/Logo_red.png"

function Header() {
      return (
          <div>
              <img src={Logo} alt="Logo Kasa" style={{
                display:'block',
                paddingLeft:'100px',
                paddingTop:'30px',
                paddingBottom:'40px'
            }}/>
          </div>
      )
}
export default Header;