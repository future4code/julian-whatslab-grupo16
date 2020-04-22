import React from 'react';
import styled from 'styled-components';



const MensagemStyled = styled.p`
width: 60%;
height: 20px;
padding: 30px;
background-color: #fff; 
position: relative;
top: 10vh;
margin: auto;
margin-bottom: 20px;
border-radius: 20px
`

const BotaoEnviar = styled.button`
    border: none;
    border-radius: 20px;
    width: 80px;
    height: 40px;
    background: #13DA1C;
    color: #fff;
    font-size: 20px;
    position: fixed;
    bottom: 100px;
    right: 420px
    
    
`

const InputEnviarNome = styled.input`
border: none;
position: fixed;
bottom: 100px;
left: 420px;
border-radius: 20px;
width: 120px;
height: 35px;
`

const InputEnviarTexto = styled.input`
position: fixed;
bottom: 100px;
right: 520px;
border-radius: 20px;
width: 200px;
height: 35px;
border: none;
`



export class Mensagem extends React.Component{

    state={

        mensagem:[
            {
                nome: '',
                texto: ''
            }
        ],

        valorInputUsuario:"  ",
        valorInputMensagem:"  "
}

    envioMensagem=()=>{
        const mensagemNova={
            usuario:this.state.valorInputUsuario,
            mensagemUsuario:this.state.valorInputMensagem
        }
        const mensagemAtualizada=[...this.state.mensagem,mensagemNova
        ];



        this.setState({mensagem:mensagemAtualizada})
    }
       
   

onChangenputUsuario=(event)=>{
    this.setState({valorInputUsuario:event.target.value});
}

onChangenputMensagem = (event) =>{
    this.setState({valorInputMensagem: event.target.value});
}

render(){
    const listaMensagem=this.state.mensagem.map((msg) =>{
        return(
            <div>
                <MensagemStyled>{msg.usuario}   {msg.mensagemUsuario}</MensagemStyled>
            </div>
        )
    });

    return(
        <div>
            <div>
                {listaMensagem}
            </div>
            <InputEnviarNome onChange={this.onChangenputUsuario}
                value={this.state.valorInputUsuario}
                placeholder={"Usuário"}/>
            
            <InputEnviarTexto onChange={this.onChangenputMensagem}
                value={this.state.valorInputMensagem}
                placeholder={"Mensagem"}/>

            <BotaoEnviar onClick={this.envioMensagem}> Enviar </BotaoEnviar>

        </div>    

    );
    }}