import styled from "styled-components";
export const CartContainer = styled.div`
padding: 5vmax;
  .cartHader {
    width: 80%;
    margin: auto;
    box-sizing: border-box;

    color: white;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    background-color: tomato;
    & > p {
      margin: 10px;
    }
  }
  .cartContainer{
    width: 80%;
    margin: auto;
    display: grid;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    grid-template-columns: 4fr 1fr 1fr;
    .cartInput{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 8vmax;
      button {
          border: none;
          padding: 0.5vmax;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          transition: all 0.3s ease;
          &:first-child{
            background-color: rgb(250,0,0);
          }
          &:last-child{
            background-color: rgb(0,200,0);
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
          font: 400 0.8vmax "Roboto";
        }
        input {
          padding: 0.5vmax;
          width: 1vmax;
          border:none;
          text-align: center;
          outline: none;
          font: 400 0.8vmax "Roboto";
          color: rgba(17, 17, 17, 0.8);
        }
    }
    .cartSubtotal{
      display: flex;
      padding: 0.5vmax;
      justify-content: flex-end;
      color:rgba(0, 0, 0, 0.8);
      font: 400 0.8vmax "Roboto";
      align-items: center;

    }
  }
  .cartGrossProfit {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1.2fr;
  .cartGrossProfitBox{
    margin: 1vmax 0;
    padding: 2vmax 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-top: 3px solid tomato;
  }
  .checkOutBtn{
    display: flex;
    justify-content: flex-end;
    button{
      background-color: tomato;
      padding: .8vmax 4vmax;
      width: 50%;
      border: none;
      color:white;
      font: 600 1rem "Roboto";
      border-radius: 30px;
    }
  }
  }
`;

export const CartItemContainer = styled.div`

display: flex;
padding: 1vmax;
align-items: flex-start;
box-sizing: border-box;

a>img{
  width: 60px;
}
&>div{
  display: flex;
  margin: .3vmax 1vmax;
  flex-direction: column;
  a{
    font:300 .9vmax cursive;
    color:rgba(24,24,25,.815);
    text-decoration: none;
  }
  span{
    font:300 .9vmax cursive;
    color:rgba(24,24,25,.815);

  }
  p{
    color:tomato;
    font:100 1em "Roboto";
    cursor: pointer;
    margin:10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      font-size: 1em;
    }
    transition: all .3s;
    &:hover{
      transform: scale(1.02);
    }
  }
}

`

export const EmptyCart = styled.div`
width: 100vw;
height: 60vh;
padding: 3rem;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
svg{
  font-size: 20vmax;
  color: tomato;
  margin: 1rem;
}
p{
  font: bold 20px "Roboto";
  text-align: center;
  margin: 3rem;
}
a{
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: tomato;
  color:white;
  font-size: 1.2rem;
  font-family: cursive,sans-serif;
  border-radius: 20px;
}
`
