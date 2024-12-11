import classes from './cards.module.css'

interface Props {
    image? : JSX.Element
    title? : string
    subtitle? : string
    description? : string
  };
function Cards(Props: Props){
    return(
        <div className={classes.componente_cards}>
            <div>
                {Props.image}
            </div>
            <div>
                <h3 className={classes.h3}>{Props.title}</h3>
                <h4 className={classes.h4}>{Props.subtitle}</h4>  
                <p> {Props.description}</p>      
            </div>
          </div>
    )
}
export default Cards;