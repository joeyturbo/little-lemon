import foodImage from './assets/restauranfood.jpg'
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-dark">
    <div className="container grid">
      <div className="hero__text">
        <h1 className="ff-serif fs-800 text-accent">Little Lemon</h1>
        <h2 className="ff-serif fs-600">Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="button-primary">
          Reserve a table
        </button>
      </div>
      <div className="hero__image-container">
        <img 
          className="hero__image" 
          src={foodImage} 
          alt="Restaurant food" 
        />
      </div>

    </div>
  </section>
  );
};

export default Hero;