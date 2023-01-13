import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  background-color: rgb(214, 214, 214);
  width: 100vw;
  padding: 6vmax;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 2vmax;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 5px;
  }
  & > div:last-child {
    align-items: flex-start;
  }
  .css-ohwg9z {
    width: 27vmax;
    height: 30vmax;
    display: grid;
    place-content: center;
  }
  .CarouselImage {
    width: 20vmax;
    height: 25vmax;
    object-fit: cover;
    border-radius: 10px;
  }
  .css-1f8sh1y {
    width: 20vmax;
    height: 25vmax;
  }
  .detailsBlock__1 {
    h2 {
      color: rgb(54, 54, 54);
      font: 600 1.6vmax "Roboto";
    }
    p {
      color: rgba(54, 54, 54, 0.532);
      font: 300 0.6vmax cursive;
    }
  }
  .detailsBlock__2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.213);
    border-bottom: 1px solid rgba(0, 0, 0, 0.213);
    width: 70%;
    padding: 1vmax 0;
    & > span {
      color: rgba(54, 54, 54, 0.6);
      font: 300 0.6vmax cursive;
    }
  }
  .detailsBlock__3 {
    width: 70%;
    & > h1 {
      color: rgba(17, 17, 17, 0.8);
      font: 400 2vmax "Franklin Ghotic Medium";
      margin: 1vmax 0;
    }
    &_1 {
      display: flex;
      align-items: center;
      & > button {
        border: none;
        cursor: pointer;
        color: white;
        background-color: tomato;
        border-radius: 20px;
        outline: none;
        margin: 1vmax;
        padding: 0.5vmax 2vmax;
        font: 500 0.7vmax "Roboto";
        transition: all 0.3s ease;
        &:hover {
          background-color: rgb(214, 84, 61);
        }
      }
      &-1 {
        button {
          border: none;
          padding: 0.5vmax;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          transition: all 0.3s ease;
          &:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
          font: 400 0.8vmax "Roboto";
        }
        input {
          border: none;
          padding: 0.5vmax;
          width: 1vmax;
          text-align: center;
          outline: none;
          font: 400 0.8vmax "Roboto";
          color: rgba(17, 17, 17, 0.8);
        }
      }
    }

    p {
      border-top: 1px solid rgba(0, 0, 0, 0.213);
      border-bottom: 1px solid rgba(0, 0, 0, 0.213);
      padding: 1vmax 0;
      color: rgba(54, 54, 54, 0.6);
    }
  }
  .detailsBlock__4 {
    p {
      color: rgba(0, 0, 0, 0.6);
      font: 300 0.8vmax sans-serif;
    }
  }
  .submitReview {
    border: none;
    color: white;
    background-color: tomato;
    font: 500 0.7vmax "Roboto";
    border-radius: 20px;
    padding: 0.6vmax 2vmax;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: unset;
    & > div:last-child {
      align-items: center;
    }
  }
`;

export const Reviews = styled.div`
  .reviewsHeading {
    color: #000000be;
    font: 500 1.4vmax "Roboto";
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1vmax;
    width: 20vmax;
    margin: auto;
    margin-bottom: 4vmax;
  }
  .reviews {
    display: flex;
    overflow: auto;
  }
  p.noReviews {
    font: 600 30px cursive;
    text-align: center;
    padding: 20px;
  }
`;

export const ReviewCardContainer = styled.div`
  flex: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.226);
  width: 30vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vmax;
  padding: 1vmax;
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(5px);
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  img {
    width: 5vmax;
    padding: 10px;
  }
  & > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    color: rgba(0, 0, 0, 0.826);
    font: 600 0.9vmax "Roboto";
    padding: 10px;
  }
  & > span {
    color: rgba(0, 0, 0, 0.426);
    font: 300 0.8vmax cursive;
    padding: 10px;
  }
`;

export const ProductsContainer = styled.div`
  .productsHeading {
    margin: 2vmax auto;
    width: 15vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 2vmax;
    color: rgba(0, 0, 0, 0.7);
    font: 500 1.5vmax "Roboto";
    text-align: center;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5vmax;
    justify-content: center;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 6vmax;
  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .page-item {
    list-style: none;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    display: grid;
    place-content: center;
    cursor: pointer;
    &:hover {
      background-color: rgb(214, 40, 40);
      .page-link {
        color: white;
        font-weight: bold;
      }
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
  .page-link {
    text-decoration: none;
    font: 300 0.7vmax "Roboto";
    color: rgb(80, 80, 80);
    transition: all 0.3s ease-in-out;
  }
  .pageItemActive {
    background-color: tomato;
    transform: scale(1.1);
    box-shadow: 0 0 5px tomato;
  }
  .pageLinkActive {
    color: white;
    font-weight: bold;
  }
`;

export const FilterBox = styled.div`
width: 10vmax;
height: 100vh;
background-color: white;
  position: fixed;
  z-index: 999;
  top:0;
  right: 0px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .category{
    padding: 0%;
    &__list{
      &_link{
        list-style: none;
        color:rgba(0, 0, 0, 0.61);
        list-style: none;
        font: 400 .8vmax "Roboto";
        margin:.4vmax;
        cursor:pointer;
        text-transform: capitalize;
      }
    }
  }
  .f{
    margin-bottom: 2rem;
  }
`;
