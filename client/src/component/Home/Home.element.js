import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  .banner {
    background-image: linear-gradient(to right, #635dc0, #3027ae);
    height: 100vmin;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    color: white;

    h1 {
      margin: 5vmax;
      font: 600 2.5vmax "Roboto";
    }
    p {
      font: 300 1.4vmax "Lucida Sans";
    }
    a {
      button {
        margin-bottom: 5vmax;
        cursor: pointer;
        background-color: white;
        border: 1px solid white;
        padding: 1vmax;
        transition: all 0.5s ease-in-out;
        width: 9vmax;
        font: 500 1vmax "Roboto";
        &:hover {
          background-color: rgba(255, 255, 255, 0);
          color: white;
        }
      }
    }
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100vmin;
      background-color: #fff;
      right: 0;
      top: 0%;
      clip-path: polygon(100% 68%, 0% 100%, 100% 100%);
    }
  }
  .homeHeading {
    width: 20vmax;
    text-align: center;
    font-family: Roboto;
    font-size: 1.4vmax;
    margin: 5vmax auto;
    border-bottom: 1px solid rgba(21, 21, 21, 0.5);
    padding: 1vmax;
  }
  #container{
    display: flex;
    margin:2vmax auto;
    flex-wrap:wrap ;
    justify-content:center ;
    width:80vw ;
    @media screen and (max-width: 800px) {
      width:95vw ;
     }
     @media screen and (max-width: 800px) {
      width:90vw ;
     }
  }
`;

export const ProductContainer = styled(Link)`
  width: 14vmax;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(48, 48, 48);
  margin: 2vmax;
  transition: all 0.5s;
  padding-bottom: 0.5vmax;
  &:hover {
    box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);
    transform: translateY(-1vmax);
  }
  & > span {
    margin: 0.5vmax;
    color: tomato;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, Helvetica,
    sans-serif;
    font-size: 1vmax;
    font-weight:bold ;
  }
  img {
    width: 14vmax;
  }
  div {
    margin-right:.3vmax ;
    display: flex;
    justify-content: flex-start;
    flex-wrap:wrap;
    align-items: center;
    span {
      font: 300 1vmax "Roboto";
    }
    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.2vmax;
      margin: 1vmax 0.5vmax;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 800px) {
    width:20vmax ;
    img {
    width: 20vmax;
  }
    & > p {
      font-size: 1.7vmax;
    }
    & > span{
      font-size: 2.5vmax ;
    }
    & > div {
      margin: 0vmax;
      display: block;
      & > span {
        margin: 0 .5vmax;
        font: 300 2vmax "Roboto"
      }
    }
  }
  @media screen and (max-width: 500px) {
    width:30vmax ;
    img {
    width: 30vmax;
  }
    & > p {
      font-size: 3vmax;
    }
    & > span{
      font-size:3vmax ;
    }
    & > div {
      margin: 0vmax;
      display: block;
      & > span {
        margin: 0 .5vmax;
        font: 300 3vmax "Roboto"
      }
    }
  }
  @media screen and (max-width: 390px) {
    width:50vmax ;
    img {
    width: 50vmax;
  }
    & > p {
      font-size: 3vmax;
    }
    & > span{
      font-size:3vmax ;
    }
    & > div {
      margin: 0vmax;
      display: block;
      & > span {
        margin: 0 .5vmax;
        font: 300 3vmax "Roboto"
      }
    }
  }
`;
