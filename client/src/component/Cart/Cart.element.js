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
  .cartContainer {
    width: 80%;
    margin: auto;
    display: grid;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    grid-template-columns: 4fr 1fr 1fr;
    .cartInput {
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
        &:first-child {
          background-color: rgb(250, 0, 0);
        }
        &:last-child {
          background-color: rgb(0, 200, 0);
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        font: 400 0.8vmax "Roboto";
      }
      input {
        padding: 0.5vmax;
        width: 1vmax;
        border: none;
        text-align: center;
        outline: none;
        font: 400 0.8vmax "Roboto";
        color: rgba(17, 17, 17, 0.8);
      }
    }
    .cartSubtotal {
      display: flex;
      padding: 0.5vmax;
      justify-content: flex-end;
      color: rgba(0, 0, 0, 0.8);
      font: 400 0.8vmax "Roboto";
      align-items: center;
    }
  }
  .cartGrossProfit {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    .cartGrossProfitBox {
      margin: 1vmax 0;
      padding: 2vmax 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      border-top: 3px solid tomato;
    }
    .checkOutBtn {
      display: flex;
      justify-content: flex-end;
      button {
        background-color: tomato;
        padding: 0.8vmax 4vmax;
        width: 50%;
        border: none;
        color: white;
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

  a > img {
    width: 60px;
  }
  & > div {
    display: flex;
    margin: 0.3vmax 1vmax;
    flex-direction: column;
    a {
      font: 300 0.9vmax cursive;
      color: rgba(24, 24, 25, 0.815);
      text-decoration: none;
    }
    span {
      font: 300 0.9vmax cursive;
      color: rgba(24, 24, 25, 0.815);
    }
    p {
      color: tomato;
      font: 100 1em "Roboto";
      cursor: pointer;
      margin: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 1em;
      }
      transition: all 0.3s;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

export const EmptyCart = styled.div`
  width: 100vw;
  height: 60vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    font-size: 20vmax;
    color: tomato;
    margin: 1rem;
  }
  p {
    font: bold 20px "Roboto";
    text-align: center;
    margin: 3rem;
  }
  a {
    text-decoration: none;
    padding: 1rem 2rem;
    background-color: tomato;
    color: white;
    font-size: 1.2rem;
    font-family: cursive, sans-serif;
    border-radius: 20px;
  }
`;

export const ShippingInfoContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .box {
    background-color: white;
    height: 90vh;
    width: 25vw;
    overflow: hidden;
    .heading {
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
      padding: 1.5vmax;
      font: 400 1.3vmax "Roboto";
      margin: auto;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: auto;
      padding: 2vmax;
      height: 80%;
      transition: all 0.5s;
      & > div {
        display: flex;
        width: 100%;
        align-items: center;

        input,
        select {
          padding: 1vmax 4vmax;
          padding-right: 1vmax;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          font: 300 0.9vmax cursive;
          width: 100%;
          outline: none;
          & + svg {
            position: absolute;
            transform: translateX(1vmax);
            font-size: 1.6vmax;
            color: rgba(0, 0, 0, 0.6);
            transition: all 0.3s ease-in-out;
          }
          &:focus + svg {
            color: tomato;
            transform: scale(1.1) translateX(1vmax);
          }
          &:focus {
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.5) inset;
          }
        }
      }
      .shippnigBtn {
        border: none;
        outline: none;
        color: white;
        font: 300 1vmax "Roboto";
        width: 100%;
        padding: 1vmax;
        cursor: pointer;
        transition: all 0.5s;
        outline: none;
        margin: 2vmax;
        background-color: tomato;
        &:hover {
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
          background-color: rgb(214, 50, 40);
        }
      }
    }
  }
`;

export const CheckOutStpesContainer = styled.div`
  padding: 8vmax 3vmax;
  padding-bottom: 2vmax;

  .MuiStepConnector-active,
  .MuiStepConnector-completed {
    background-color: tomato;
  }

  .MuiSvgIcon-root {
    font-size: 2vmax !important;
  }
`;

export const ConfirmOrderContainer = styled.div`
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: 6fr 3fr;
  & > div:last-child {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
  }
  .area {
    padding: 5vmax;
    padding-bottom: 0%;
    & > p {
      font: 400 1.8vmax "Roboto";
    }
    .box,
    .container {
      margin: 2vmax;
    }
    .box {
      & > div {
        display: flex;
        margin: 1vmax 0;
        & > p {
          font: 400 1vmax "Roboto";
          color: black;
        }
        & > span {
          color: #575757;
          margin: 0 1vmax;
          font: 100 1vmax "Roboto";
        }
      }
    }
  }
  .container {
    padding: 5vmax;
  }
  .confirmCartItemsContainer {
    max-height: 20vmax;
    overflow-y: auto;
    a {
      display: flex;
      font: 400 1vmax "Roboto";
      justify-content: space-between;
      align-items: center;
      margin: 2vmax 0;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      padding: 1rem 2rem;
      margin: 0.5rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      img {
        width: 40px;
      }
      p {
        width: 60%;
      }
      span {
        font: 100 1vmax "Roboto";
        color: #5e5e5e;
      }
    }
  }
  .orderSummary {
    padding: 7vmax;
    & > p {
      text-align: center;
      font: 400 1.8vmax "Roboto";
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      margin: auto;
      width: 100%;
      padding: 1vmax;
    }
    & > div {
      & > div {
        display: flex;
        justify-content: space-between;
        margin: 2vmax 0;
        font: 300 1vmax "Roboto";
      }
    }
    & > button {
      background-color: tomato;
      color: white;
      font: 400 1vmax "Roboto";
      width: 100%;
      cursor: pointer;
      transition: all 0.5s;
      border: none;
      padding: 1vmax;
      outline: none;
      border-radius: 30px;
      font: 400 1vmax "Roboto";
      &:hover {
        background-color: rgb(192, 71, 50);
      }
      &:active {
        transform: scale(0.9) translateX(-10px);
      }
    }
  }
  .orderSummaryTotal {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    justify-content: space-between;
    padding: 2vmax 0;
  }
`;

export const PaymentContainer = styled.div`
  padding: 10vmax;
  display: grid;
  place-content: center;
  form {
    background-color: white !important;
    padding: 2vmax;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .StripeElement {
    width: 30vw;
    padding: 1vmax;
    border-radius: 10px;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .payBtn {
    width: 100%;
    margin: 1vmax 0;
    padding: 1vmax 2vmax;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: tomato;
    color:white;
    font: 600 1vmax "Roboto"
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  padding: 10vmax;
  text-align: center;
  align-items: center;
  margin: auto;
  justify-content: center;
  svg {
    font-size: 7vmax;
    color: tomato;
  }
  p {
    font-size: 2vmax;
  }
  a {
    background-color: rgb(100, 100, 100);

    color: white;
    font: 400 1vmax "Roboto";
    cursor: pointer;
    text-decoration: none;
    margin: 2vmax;
    padding: 1vmax 2vmax;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: rgb(51, 51, 51);
    }
  }
`;
