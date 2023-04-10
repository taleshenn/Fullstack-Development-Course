<script>
  // verifica se as credenciais do usuário já foram salvas localmente
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (username && password) {
    // redireciona para a página de logout
    window.location.href = "logout.html";
  }
</script>
