// Evento de click no botão de login
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Exibir a mensagem de login efetuado com sucesso
    document.getElementById("mensagemLoginSucesso").style.display = "block";
  
    // Opcional: Limpar os campos do formulário após o cadastro
    document.getElementById("emailCadastro").value = "";
    document.getElementById("senhaCadastro").value = "";
  
    // Opcional: Ocultar a mensagem após alguns segundos
    setTimeout(function() {
      document.getElementById("mensagemLoginSucesso").style.display = "none";
    }, 3000); // Oculta a mensagem após 3 segundos
  });

document.getElementById("btnEntrar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
  
    // Simulação de login bem-sucedido
    if (validarCampos()) {
      mostrarMensagemDeSucesso();
    } else {
      mostrarMensagemDeErro();
    }
  });
  
  function validarCampos() {
    return true; // Substitua por sua lógica de validação personalizada
  }
  
  function mostrarMensagemDeSucesso() {
    
    const divAlerta = document.createElement("div");
    divAlerta.className = "alerta-sucesso";
    divAlerta.textContent = "Login efetuado.";
  
    const containerAlertas = document.getElementById("containerAlertas");
    containerAlertas.appendChild(divAlerta);
  
    setTimeout(() => {
      divAlerta.remove();
    }, 3000); // Esconde o alerta automaticamente após 3 segundos
  }
  
  function mostrarMensagemDeErro() {
    const divAlerta = document.createElement("div");
    divAlerta.className = "alerta-erro";
    divAlerta.textContent = "Dados inválidos.";
  
    const containerAlertas = document.getElementById("containerAlertas");
    containerAlertas.appendChild(divAlerta);
  }