
import './Specials.css'
import bruschetta from './assets/bruchetta.svg';
import greekSalad from './assets/greek salad.jpg';
import lemonDessert from './assets/lemon dessert.jpg';
import SpecialsCard from './SpecialsCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSalad,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschetta,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessert,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];


const Specials = () => {
  return (
    <section className="grid container specials">
      <div className="specials__header">
        <h2 className="ff-serif fs-600 text-dark">This weeks specials!</h2>
        <button className="button-primary">Online Menu</button>
      </div>
      {meals.map((meal, index) => 
        <SpecialsCard key={index} meal={meal}/>
      )}
    </section>
  )
}

export default Specials;