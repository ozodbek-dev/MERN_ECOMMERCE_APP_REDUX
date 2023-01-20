import { ReviewCardContainer } from "./ProductDetails.element"
import avatar from "../../images/avatar.png"
import { Rating } from "@mui/material"


const ReviewCard = ({review}) => {


  const options = {
    value: review.rating,
    size:"large",
    readOnly:true,
    precision:0.5
  }


  return (
    <ReviewCardContainer>
    
      <img src={avatar} alt="User" />
      <p>{review.name}</p>
      <Rating {...options}/>
      <span>{review.comment}</span>
    </ReviewCardContainer>
  );
}

export default ReviewCard;