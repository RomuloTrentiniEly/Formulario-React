import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Chama o construtor da classe pai (Component) para inicialização

    this.state = {
      email: '',
      senha: '',
      error: ''
      // Define o estado inicial com as propriedades email, senha e error
    };

    this.cadastrar = this.cadastrar.bind(this);
    // Vincula a função cadastrar à instância da classe App
  }

  cadastrar(event) {
    const { email, senha } = this.state;
    // Extrai as propriedades email e senha do estado usando desestruturação

    if (email !== '' && senha !== '') {
      // Verifica se o email e a senha não estão vazios
      alert(`Email: ${email} \nSenha: ${senha}`);
      // Exibe um alerta com o email e senha inseridos
    } else {
      this.setState({ error: 'Ops! Parece que está faltando algo!' });
      // Define o estado error com uma mensagem de erro
    }

    event.preventDefault();
    // Evita o comportamento padrão de recarregar a página ao enviar o formulário
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        {/* Título do formulário */}
        
        {this.state.error && <p>{this.state.error}</p>}
        {/* Exibe a mensagem de erro se existir no estado */}
        
        <form onSubmit={this.cadastrar}>
          {/* Chama a função cadastrar ao enviar o formulário */}

          <h3>Digite seu email:</h3>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          {/* Campo de entrada para o email. Atualiza o estado com o valor do email ao alterar o campo */}

          <h3>Digite sua senha:</h3>
          <input
            type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}  
          />  <br/><br/>
          {/* Campo de entrada para a senha. Atualiza o estado com o valor da senha ao alterar o campo */}

          <button type="submit">Cadastrar</button>
          {/* Botão de envio do formulário */}
        </form>
      </div>
    );
  }
}

export default App;