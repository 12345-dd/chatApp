const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const chatRoutes = require("./routes/chatRoutes")

app.use("/",chatRoutes)


const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server running on PORT- ${PORT}`)
})