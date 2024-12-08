import express from 'express'
const app = express()

app.use(express.json())
const users = []

app.post('/users', (req, res) =>{
  const body = req.body
  users.push(body)
  res.status(201).json(users)
})

app.listen(3001, () => {
  console.log('Iniciando servidor na porta 3001')
})