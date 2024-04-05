import './SpecialsCard.css'

const SpecialsCard = ({meal}) => {
  return (
    <div className="specials__card">
      <div className="specials__card-img">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="specials__card-body text-dark ff-sans">
        <div className="specials__card-header">
          <h3>{meal.name}</h3>
          <p>{meal.price}</p>
        </div>
        <div className="specials__card-description">
          <p>{meal.description}</p>
      </div>


      </div>
    </div>
  )
}

export default SpecialsCard;