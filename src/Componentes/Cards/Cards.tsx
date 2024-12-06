import classes from './cards.module.css'

interface Props {
    image? : JSX.Element
    title? : string
    description? : string
  }

function Cards(Props: Props){
    return(
        <div className={classes.componente_cards}>
            <div className={classes.image}>
                {Props.image}
            </div>
            <div className={classes.description}>
                <h3>{Props.title}</h3>
                <span>
                    {Props.description}
                </span>
            </div>
        </div>
    )
}
export default Cards;