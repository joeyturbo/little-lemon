import TestimonialCard from './TestimonialCard';
import reviewer1 from './assets/reviewer1.jpg';
import reviewer2 from './assets/reviewer2.jpeg';
import reviewer3 from './assets/reviewer3.jpeg';
import reviewer4 from './assets/reviewer4.jpeg';
import './Testimonials.css'

const reviews = [
  {
    image: reviewer1,
    name: "Tony",
    rating: [1,1,1,1,0.5],
    comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
  },
  {
    image: reviewer2,
    name: "Stephen",
    rating: [1,1,1,1],
    comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
  },
  {
    image: reviewer3,
    name: "Beth",
    rating: [1,1,1,1,1],
    comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
  },
  {
    image: reviewer4,
    name: "Alexa",
    rating: [1,1,1,1,1],
    comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
  }
]


const Testimonials = () => {
  return (
    <section className="testimonial bg-dark">
      <div className="grid container">
        <h2 className="ff-serif fs-600">What people are saying about us!</h2>
        {reviews.map((review, index) => 
          <TestimonialCard key={index} review={review} />
        )}
      </div>
    </section>
  )
}

export default Testimonials;