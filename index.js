const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/home', (req, res) => {
    console.log('Home')
    res.send('Hello, world!')
})
const students = [
	{name: "Alice", age: 10},
	{name: "Bob", age: 11},
	{name: "Charlie", age: 11},
]
app.get('/students', (req, res) => {
	res.json(students)
    console.log('Homesssssss')
})
