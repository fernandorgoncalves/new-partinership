import styles from './Footer.module.css'


import logo from '../../assets/logo.svg'
import x from '../../assets/icn-twiter.svg'
import instagram from '../../assets/icn-instagram.svg'
import youtube from '../../assets/icn-youtube.svg'
import linkedin from '../../assets/icn-linkedin.svg'

export function Footer(){
    return(
        <div>
            <div className={styles.containerFooter}>

                <div className={styles.logoFooter}>
                <div>
                <img src={logo} alt="logo" className={styles.logo}/>
                </div>

                <div className={styles.redes}>
                    <img src={x} alt="twitter"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={youtube} alt="youtube"/>
                    <img src={linkedin} alt="linkedin"/>
                </div>
                </div>

                <div className={styles.footerlinks}>
            <div>
                <div>
                    <ul>
                <h3>Partinership</h3> 
                        <li>Beneficios</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Acesso</h3>
                <div>
                    <ul>
                        <li>Registre-se</li>
                        <li>Login</li>
                        <li className={styles.ponto}>.</li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
        </div>
    
    )
}