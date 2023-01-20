import styled from "styled-components";

export const MyOrdersContainer = styled.div`
  position: fixed;
  width: 100vw;
  max-width: 100%;
  padding: 0 7vmax;
  background-color: white;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;

  #myOrdersHeading {
    text-align: center;
    font: 400 1.2vmax "Roboto";
    color: white;
    transition: all 0.2s;
    background-color: rgb(44, 44, 44);
    box-sizing: border-box;
    padding: 0.5vmax 1vmax;
  }
  .myOrdersTable {
    padding: 4vmax 1vmax;
    background-color: rgb(220, 220, 220);
    div {
      font: 300 1vmax "Roboto";
      color: rgba(0, 0, 0, 0.8);
      border: none;
    }
    a {
      color: rgba(0, 0, 0, 0.6);
      transition: all 0.3s;
      svg {
        transition: all 0.3s;
      }
      &:hover {
        color: tomato;
        svg {
          transform: scale(1.1);
        }
      }
    }
  }
  .MuiDataGrid-columnHeader {
    background-color: tomato;
    div {
      color: white;
      font: 500 1.1vmax "Roboto"!important;
    }
  }
  .MuiDataGrid-iconSeparator {
    display: none !important;
  }
`;

export const OrderDetailsContainer = styled.div`
  background-color: white;
  .container {
    padding: 5vmax;
    padding-bottom: 0%;
    & > h1 {
      font: 300 3vmax "Roboto";
      margin: 4vmax 0;
      color: tomato;
    }
    & > p {
      font: 400 1.8vmax "Roboto";
    }
  }

  .box,
  .orderCartItems {
    margin: 2vmax;
  }
  .box {
    & > div {
      display: flex;
      margin: 1vmax 0;
      p {
        font: 400 1vmax "Roboto";
        color: black;
      }
      span {
        margin: 0 1vmax;
        font: 100 1vmax "Roboto";
        color: #575757;
      }
    }
  }
  .orderCartItems {
    padding: 2vmax 5vmax;
    border-top: 1px solid rgba(0, 0, 0, 0.123);
    & > p {
      font: 400 1.8vmax "Roboto";
    }
  }
  .orderCartItemsContainer {
    & > a {
      display: flex;
      font: 400 1vmax "Roboto";
      align-items: center;
      margin: 2vmax 0;
      text-decoration: none;
      transition: all 0.3s;
      padding: 0.5vmax;
      &:hover {
        background-color: rgba(0, 0, 0, 0.123);
      }
      img {
        width: 3vmax;
        min-width: 50px;
      }
      p {
        width: 60%;
        margin: 0 2vmax;
      }
      span {
        font: 100 1vmax "Roboto";
        color: #5e5e5e;
      }
    }
  }
`;
