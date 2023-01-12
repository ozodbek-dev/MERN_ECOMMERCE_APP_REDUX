import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 10vmax;
  padding: 2vmax;
  background-color: rgb(34, 33, 33);
  display: flex;
  align-items: center;
  justify-content:space-between ;
  .leftFooter {
    width: 20%auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      color:white ;
    }
   p {
      text-align: center;
      font-family: "Lucia Sans", "Lucia Sans Regular", "Lucia Grande",
        sans-serif;
        color:white;
    }
    img {
      width: 10vmax;
      cursor: pointer;
    }
  }
  .midFooter {
    width: 60%auto;
    text-align: center;
    h1 {
      font-size: 4vmax;
      font-family: "Roboto", sans-serif;
      color: crimson;
    } 
    p{
        width:60% ;
        margin:1vmax auto;
        color:rgb(200,200,200)
    }
  }
  .rightFooter{
    width:20%;
    display:flex ;
    flex-direction: column;
    align-items:center ;
    h4{
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size:1.4vmax ;
      text-decoration:underline ;
      color:white;
    }
    a{
      font-size:1.3vmax ;
      font-family:"Gill sans", "Gill Sans MT",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
      color:white;
      text-decoration:none;
    }
  }
`;
