import styled from 'styled-components'

export const LoginSignUpContainer = styled.div`
width: 100vw;
height: 100vh;
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(231,231,231);
position: fixed;
top:0;
left: 0;
.box{
  background-color: white;
  width: 25vw;
  height: 70vh;
  box-sizing: border-box;
  overflow: hidden;
  & > div {
    height: 100%;
    &>button{
      background-color: tomato;
      height: 3px;
      width: 50%;
      border: none;
      transition: all .5s;
    }
  }
}
.login_signUp_toggle{
  width: 100%;
  display: flex;
  height: 3vmax;
  p{
    width: 100%;
    color:rgba(0,0,0,0.678);
    transition: all .5s;
    font:300 1vmax "Roboto";
    cursor:pointer;
    display: grid;
    place-items:center;
    &:hover{
      color:tomato;
    }
  }
  
}
.loginForm,.signUpForm{
  display: flex;
  height: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vmax;
  transition: all .2s ease;
   &>div{
    width: 100%;
    position: relative;
    input, select{
      padding: 1vmax 4vmax;
      padding-right: 1vmax;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid rgba(0,0,0,0.278);
      border-radius: 4px;
      font:300 0.9vmax cursive;
      outline:none;
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
.loginForm {
  a{
    color:black;
    align-self: flex-end;
  }
}
.loginBtn,.signUpBtn{
  border:none;
  background-color: tomato;
  color:white;
  font:300 .9vmax "Roboto";
  width: 100%;
  padding: .8vmax;
  cursor: pointer;
  transition: all .3s ease-in-out;
  border-radius: 4px;
  &:hover{
    background-color: rgb(214,50,45);
    box-shadow: 0 3px 5px rgba(0,0,0,0.278);
  }
}


.shiftToNeutral{
  transform:translateX(0%);
}


.shiftToRight{
  transform:translateX(100%);
}
.shiftToLeft{
  transform:translateX(-100%);
}
.shiftToNeutralForm{
  transform: translateX(0%) translateY(-100%);
}
#registerImage{
  input{
    display: flex;
    padding: 0;
    &::file-selector-button{
      cursor:pointer;
      width: 100%;
      height: 100%;
      height: 5vh;
      margin: 0;
      border: none;
      outline: none;
      font: 400 .8vmax cursive;
      transition: all .5s;
      padding: 0 1vmax;
      background-color: white;
      color: rgba(0,0,0,.6);

    }
    &::file-selector-button:hover{
     background-color:rgba(0,0,0,0.278);

    }
  }
  img{
    width: 3vmax;
    height: 3vmax;
    object-fit: cover;
    border-radius: 50%;
  }
}
`


export const UserOptionsContainer = styled.div`
position: relative;
z-index: 10000;
.speedDial{
  position: fixed;
  right: 3vmax;
  top: 2vmax;
}
.speedDialIcon{
  width: 55px;
  height: 55px;
  object-fit: cover;
border-radius: 100%;
}
`

export const ProfileContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 4vmax;
    top: 0;
    left: 0;  
    max-width: 100%;
    background-color: white;
    &>div{
      display: flex;
      height: 100vh;
      max-width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &>div:first-child {
      h1{
        color: gray;
        padding: 1vmax;
        font: 500 2vmax "Roboto";
      }
      img{
        width: 20vmax;
        height: 20vmax;
        border-radius: 50%;
        transition: all .5s ease-in;
        object-fit: cover;
        &:hover{
          transform: scale(1.05);
          box-shadow: 0 0 3px gray;
        }
      }
     a{
        border:none;
        background-color:tomato;
        font: 400 1vmax "Roboto";
        transition: all .3s;
        color:white;
        text-align: center;
        margin: 4vmax;
        width: 30%;
        text-decoration: none;
        padding: .5vmax;
      }

    }
    &>div:last-child{
      width: 30vmax;
      justify-content: space-evenly;
      padding: 5vmax;
      box-sizing: border-box;
      align-items: flex-start;
      h4{
        color: black;
        font:400 1.2vmax "Roboto";
      }
      p{
        color: rgba(0,0,0,0.418);
        font:400 1vmax cursive;
        margin:.2vmax;
      }
      &>div:last-child{
        display: flex;
        flex-direction: column;
        width: 60%;
        a{
          border:none;
          text-decoration: none;
          text-align: center;
          transition: all .5s;
          margin: 1vmax 0;
          padding: .5vmax;
          background-color: rgb(68,68,68);
          font: 600 1vmax "Roboto";
          color:white;
          &:hover{
            background-color: rgb(31,31,31);
          }
        }
      }
    }
`