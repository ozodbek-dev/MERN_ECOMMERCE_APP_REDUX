import styled from 'styled-components';

export const SearchContainer = styled.form`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(231,231,231);
  position: fixed;
  top: 0;
  left:0;
  input{
    &[type="text"]{
      box-shadow: 0 0 5px rgba(0,0,0,.2);
    background-color: white;
    border: none;
    outline: none;
    border-radius: 0%;
    font: 300 1.1vmax cursive;
    box-sizing: border-box;
    padding: 1vmax 2vmax;
    height: 8%;
    width: 50%;
    transition: all .2s ease-in-out;
    &:focus{
      box-shadow: 0 0 15px rgba(0,0,0,.5);
    }
    }
    &[type="submit"]{
      box-shadow: 0 0 5px rgba(0,0,0,.2);
    background-color: tomato;
    border: none;
    outline: none;
    padding: 1vmax;
    border-radius: 0%;
    font: 300 1.1vmax cursive;
    box-sizing: border-box;
    height: 8%;
    width: 10%;
    color:white;
    transition: all .1s ease;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover{
      background-color: rgb(214,45,60);
         box-shadow: 0 0 15px rgba(0,0,0,.5);
    }
    
    }

    
  }

`