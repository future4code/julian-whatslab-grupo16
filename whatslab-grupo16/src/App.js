import React from 'react';
import styled from 'styled-components';
import {Mensagem} from './Components/Mensagem.js';

  const Tela = styled.div`
    width: 40vw;
    height: 80vh;
    background-color: rgb(240,212,165); 
    position: relative;
    top: 10vh;
    margin: auto;
    border-radius: 20px;

    @media screen and (max-width: 375px;){
      width: 100%;
    }
  `


class App extends React.Component{


    render(){

      return(
        <div>
          <Tela>
        <Mensagem/>
        </Tela>
        </div>
      );
    }

}
  

export default App;
