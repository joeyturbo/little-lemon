import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TestimonialCard.css';

const ratings = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({review}) => {
  return (
    <article className="testimonial__card ff-sans text-dark">
      <div className="testimonial__card-title">
          <img className="testimonial__card-img" src={review.image} alt={review.name} />
          <h4>{review.name}</h4>
      </div>

      <span>
        {review.rating.map((score, index) => 
          <FontAwesomeIcon
            className="icon"
            key={index}
            icon={ratings[score]}
            size='xs'
          />
        )}
      </span>
      <p>{review.comment}</p>
    </article>
  )
}

export default TestimonialCard;