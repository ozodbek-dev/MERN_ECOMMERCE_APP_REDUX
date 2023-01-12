import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000043;
  z-index: 10000;
  display: grid;
  place-content: center;
  opacity: .7;
  div{
    width: 20vmax;height:20vmax;
    border-bottom: 10px solid rgb(110,110,110);
    border-radius: 50%;
    animation: loadingRotate .8s linear infinite;
  }
  @keyframes loadingRotate{

    0%{
      transform: rotateZ(0);
      opacity: 1;
    }
    50%{
      transform: rotateZ(360deg);
      opacity: .5;
    }
    0%{
      transform: rotateZ(0);
      opacity: 1;
    }
  }
`