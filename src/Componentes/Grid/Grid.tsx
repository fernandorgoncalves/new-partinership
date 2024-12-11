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
                description={" Passagem aérea ida e volta"}
                descriptiona={"Hospedagem em hotel"}
                descriptionb={"Ingresso Salone Del Mobile"}
                   
            />    
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Milão 700.000 pontos"} 
                subtitle={'Serviços Inclusos'}
                description={"Passagem aérea ida e volta"}
                descriptiona={"Hospedagem"}
                descriptionb={"Café da manhã"}

            />
                        <Cards
                image={<img src={ushuaia} alt="milao"/>}
                title={"Ushuaia 450.000 pontos"} 
                subtitle={'Serviços Inclusos'}
                description={"Passagem aérea ida e volta"}
                descriptiona={"Hospedagem / 5 dias 4 noites "}
                descriptionb={"Café da manhã"}

            />
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Croácia 700.000 pontos"} 
                subtitle={'Serviços Inclusos'}
                description={"Conheça a grácia por um período de 5 dias"}           
            />
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Ingresso Rock in Rio"} 
                description={"Troque seus pontos por ingressos do Rock in Rio"}            
            />
                        <Cards
                image={<img src={milao} alt="milao"/>}
                title={"Rio de Janeiro"} 
                subtitle={'Serviços Inclusos'}
                description={"Troque seus pontos por uma viajem de 5 dias no Rio de Janeiro"}            
            />
        </div>
    )
}