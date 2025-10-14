const express = require("express");
const cors = require("cors")
const app = express();

require("dotenv").config();

const proutoRoutes = require("./routes/ProdutoRoute")
const tutorRoute = require("./routes/TutorRoute");
const petRoute = require("./routes/PetRouter")
const veterinarioRoute = require("./routes/VeterinarioRoute");
const consultaRoute = require("./routes/ConsultaRoute");

app.use(cors());
app.use(express.json());

app.use("/api/produto/", proutoRoutes)
app.use("/api/tutor", tutorRoute)
app.use("/api/pet", petRoute)
app.use("/api/veterinario", veterinarioRoute)
app.use("/api/consulta", consultaRoute)

const connectDB = require("./db/connection");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


