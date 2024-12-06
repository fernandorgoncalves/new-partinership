import styles from './Grid.module.css'
import Cards from '../Cards/Cards'

//ASSETS
import japao from '../../assets/orlando.svg'

export function Grid(){
    return(
        <div className={styles.componente_grid}>  
            <Cards
                image={<img src={japao} alt="japao"/>}
                title={"Orlando"} 
                description={"Uma Viajem de 5 dias para você desfrutar da melhor experiência que este parque pode proporcionar."}
            />
                        <Cards
                image={<img src={japao} alt="japao"/>}
                title={"Orlando"} 
                description={"Uma Viajem de 5 dias para você desfrutar da melhor experiência que este parque pode proporcionar."}
            />
                        <Cards
                image={<img src={japao} alt="japao"/>}
                title={"Orlando"} 
                description={"Uma Viajem de 5 dias para você desfrutar da melhor experiência que este parque pode proporcionar."}
            />
                        <Cards
                image={<img src={japao} alt="japao"/>}
                title={"Orlando"} 
                description={"Uma Viajem de 5 dias para você desfrutar da melhor experiência que este parque pode proporcionar."}
            />
                        <Cards
                image={<img src={japao} alt="japao"/>}
                title={"Orlando"} 
                description={"Uma Viajem de 5 dias para você desfrutar da melhor experiência que este parque pode proporcionar."}
            />
                        <Cards
                image={<img src={japao} alt="japao"/>}
                title={"Orlando"} 
                description={"Uma Viajem de 5 dias para você desfrutar da melhor experiência que este parque pode proporcionar."}
            />
        </div>
    )
}