import styles from './Grid.module.css'
import Cards from '../Cards/Cards'

//ASSETS
import milao from '../../assets/milao.svg'
import milaosalone from '../../assets/milaosalone.svg'
import ushuaia from '../../assets/ushuaia.svg'

export function Grid(){
    return(
        <div className={styles.componente_grid}>  
            <Cards
                image={<img src={milaosalone} alt="milao"/>}
                title={"Milão - Salone Del Mobile 1.500 pontos"} 
                subtitle='Serviços Inclusos' 
                   
            />    
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Milão 700.000 pontos"} 
                subtitle='Serviços Inclusos'

            />
                        <Cards
                image={<img src={ushuaia} alt="milao"/>}
                title={"Ushuaia 450.000 pontos"} 
                subtitle=''

            />
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Orlando"} 
                subtitle=''
            
            />
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Orlando"}
                subtitle='' 
            
            />
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Orlando"} 
                subtitle=''
            
            />
        </div>
    )
}