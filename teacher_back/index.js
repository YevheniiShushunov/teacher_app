require("dotenv").config()
const cors = require("cors"),
    {app, express, server} = require("./services/server.services"),
    PORT = process.env.PORT,
    bodyParser = require('body-parser')

const authRouter = require("./routes/auth.router.module");

app.use(cors({
        origin: process.env.CORS,
        credentials: true,
    }),
);

app.use(bodyParser.json());
app.use(authRouter);


server.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`);
})