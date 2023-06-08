document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Enviar datos al back-end
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        alert("Inicio de sesión exitoso");
      } else {
        window.location.href = "index_chat.html";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
  