import React from 'react';

export class mensagem extends React.Component{

    state={

        mensagem:[
            {}
        ],

valorInputUsuario:"",
valorInputMensagem:""
    }

    envioMensagem=()=>{
        const mensagemNova={
            usuario:this.state.valorInputUsuario,
            mensagemUsuario:this.state.valorInputMensagem
        }
        const mensagemNova=[
            ...this.state.mensagem,mensagemNova
        ];
    }
        this.setState({mensagem:mensagemNova})
   
}
onChangenputUsuario=(event)=>{
    this.setState({valorInputUsuario:event.target.value});
}

render(){
    const listaMensagem=this.state.mensagem.map((msg) =>{
        return(
            <p>
                {msg.usuario}:
                {msg.mensagemUsuario}
            </p>
        )
    });

    return(
        <div>
            <div>
                {listaMensagem}
            </div>
            <input onChange={this.onChangenputUsuario}
                value={this.state.valorInputUsuario}
                placeholder={"Usuário"}/>
            
            <input onChange={this.onChangenputMensagem}
                value={this.state.valorInputMensagem}
                placeholder={"Mensagem"}/>

            <button onClick={this.envioMensagem}> Enviar </button>

        </div>    

    );
}