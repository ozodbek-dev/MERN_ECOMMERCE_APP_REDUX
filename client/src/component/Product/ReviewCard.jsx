import ReactStars from "react-rating-stars-component"
import { ReviewCardContainer } from "./ProductDetails.element"
import avatar from "../../images/avatar.png"
import { MetaData } from "../layout/MetaData"

const starWidth = (windowWidth) => {
  if (windowWidth < 500) {
    return 30
  } else if (windowWidth < 700) {
    return 15
  } else if (windowWidth < 1000) {
    return 20
  } else return 25
}
const ReviewCard = ({review}) => {


  const options = {
    edit: false,
    color: 'rgba(20,20,20, .1)',
    activeColor: 'tomato',
    size:  starWidth(window.innerWidth),
    value: review.rating,
    isHalf: true,
  }


  return (
    <ReviewCardContainer>
    
      <img src={avatar} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options}/>
      <span>{review.comment}</span>
    </ReviewCardContainer>
  );
}

export default ReviewCard;