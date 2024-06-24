

export default function Card(props){
  return(
    <div className="card1">
        <img src={`./images/${props.img}`} className="image"/>
        {/* <img src="./images/soldout.png" className="soldout-img"/> */}
      <div className="card-content">
        <img src="./images/Star 1.png" className="star-img"/>
        <span>{props.rating}</span>
        <span className="grey"> ({props.reviewCount}).</span>
        <span className="grey"> ({props.country}).</span>
      </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><span className="bold">From ${props.price} </span> / person </p>
      
    </div>

  )
}