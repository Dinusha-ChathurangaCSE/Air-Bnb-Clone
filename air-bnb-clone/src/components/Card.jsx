 
export default function Card(props){
  console.log(props)
  let badgeText
  if (props.openSpots==0){
    badgeText = 'SOLD OUT'
  }else if (props.location =='Online'){
    badgeText = 'ONLINE'
  }
  return(
    <div className="card1">
        {/* CONDITIONAL RENDERING */}
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={`./images/${props.coverImg}`} className="image"/>
        {/* <img src="./images/soldout.png" className="soldout-img"/> */}
      <div className="card-content">
        <img src="./images/Star 1.png" className="star-img"/>
        <span>{props.stats.rating}</span>
        <span className="grey"> ({props.stats.reviewCount}).</span>
        <span className="grey"> ({props.location}).</span>
      </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><span className="bold">From ${props.price} </span> / person </p>
      
    </div>

  )
}