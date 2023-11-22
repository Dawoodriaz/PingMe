const express = require('express')
const { chats } = require('./data/data')
const app = express()
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const logger = require("morgan")

const { notFound, errorHandler } = require("./middleware/errorMiddleware")




const cors = require("cors")
app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger("dev"))

const userRoutes = require ('./Routes/userRoutes')
const chatRoutes = require ('./Routes/chatRoutes')


dotenv.config()
connectDB()
const port = process.env.PORT

app.use(express.json())
app.use(cors()) // Use this after the variable declaration

app.use("/", userRoutes)

app.use("/", chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


// // Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.send('API is working')
// })


// app.get('/api/chat/:id', (req, res) => {
//   console.log(req.params.id)
//   const singleChat = chats.find(c=>c._id === req.params.id )
//   res.send(singleChat)
// })

