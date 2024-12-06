
import logo from '../../assets/logo.svg'
import x from '../../assets/icn-twiter.svg'
import instagram from '../../assets/icn-instagram.svg'
import youtube from '../../assets/icn-youtube.svg'
import linkedin from '../../assets/icn-linkedin.svg'

export function Footer(){
    return(
        <div>
            <div>
                <img src={logo} alt="logo"/>
                <div>
                    <img src={x} alt="logo"/>
                    <img src={instagram} alt="logo"/>
                    <img src={youtube} alt="logo"/>
                    <img src={linkedin} alt="logo"/>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    
    )
}