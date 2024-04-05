import image1 from './assets/Mario and Adrian A.jpg';
import image2 from './assets/Mario and Adrian b.jpg';
import './About.css'

const About = () => {
  return (
    <section className="about container grid">
      <article className="about__text">
        <h1 className="ff-serif fs-800 text-accent">Little Lemon</h1>
        <h2 className="ff-serif fs-600 text-dark">Chicago</h2>
        <p className="ff-sans fs-300 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      </article>
      <div className="about__images">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
      </div>
      

    </section>
  )
}

export default About;