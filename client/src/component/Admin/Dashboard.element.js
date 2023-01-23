import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  position: absolute;
  &> .container {
    border-left: 1px solid rgba(0, 0, 0, 0.13);
    background-color: white;
    padding: 3rem 0;
    & > h1 {
      color: rgba(0, 0, 0, 0.7333);
      font: 300 2rem "Roboto";
      margin: auto;
      width: 50%;
      text-align: center;
      padding: 1.5rem;
    }
    .dashboardSummary{
      margin: 2rem 0;
      &>div{
        display: flex;
        border-color: white;
        justify-content: center;
        &>p{
          background-color: rgba(70,117,218,.921);
          color: white;
          font: 300 1.3rem "Roboto";
          text-align: center;
          padding:1.5rem;
          width: 100%;
          margin: 0 2rem;
        }
      }
    }
    .dashboardSummaryBox2{
      &>a{
        display: flex;
        color: black;
        font: 300 2rem "Roboto";
        background-color: rgb(255,233,174);
        padding: 1.5rem;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-align: center;
        flex-direction: column;
        border-radius: 50%;
        width: 10vmax;
        height: 10vmax;
        margin: 2rem;
        transition: all .2s;
        &:hover{
          transform: scale(1.04);
          box-shadow: 0 0 4px solid tomato;
        }
        &:first-child{
          background-color: rgb(255,110,110);
          color:white;
        }
        &:last-child{
          background-color: rgb(51,51,51);
          color:rgb(255,255,255)
        }
      }
    }
  }
  .lineChart{
    width: 80%;
    margin: auto;
  }
  .doughnutChart{
    width: 30vmax;
    margin: auto;
  }
  .createProductForm{
  display: flex;
  background-color:white ;
  border-radius: 10px ;
  box-shadow: 0 0 5px rgba(0,0,0,0.278) ;
  margin:auto ;
  min-width: 200px ;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vmax;
  transition: all .2s ease;
 
   &>div{
    width: 100%;
    position: relative;
  select{
      padding: 1vmax 4vmax;
      padding-right: 1vmax;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid rgba(0,0,0,0.278);
      border-radius: 4px;
      font:300 0.9vmax cursive;
      outline:none;
      text-transform:capitalize ;
      &:focus + svg{
      color:tomato;
      transform: scale(1.1);
    }
    }

 
    svg{
      position: absolute;
      top:.5vmax;
      left:1vmax;
      font-size: 1.6vmax;
      color:rgba(0,0,0,0.678);
      transform: all .1s ease;
    }
   
   }
}
`;

//13 :01