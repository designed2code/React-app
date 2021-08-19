import './Card.css'
const Card = (props) => {
    const classes = 'card ' + props.className; //White Space after 'card ' is very important
    return <div className={classes}>{props.children}</div>
}
 
export default Card;