import classes from './cards.module.css'

interface Props {
    image? : JSX.Element
    title? : string
    subtitle? : string
    description? : string
    descriptiona? : string
    descriptionb? : string
  };
function Cards(Props: Props){
    return(
        <div className={classes.componente_cards}>
            <div className={classes.image}>
                {Props.image}
            </div>
            <div className={classes.info}>
                <h3 className={classes.title}>{Props.title}</h3>
                <h4 className={classes.subtitle}>{Props.subtitle}</h4> 
                <div className={classes.infoLista}>
                    <p> {Props.description}</p>      
                    <p> {Props.descriptiona}</p>      
                    <p> {Props.descriptionb}</p>     
                </div>  
            </div>
          </div>
    )
}
export default Cards;