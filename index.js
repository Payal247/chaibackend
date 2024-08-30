const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
    res.send("Harshit")
})
app.get('/twitter', (req, res) => {
    res.send('Harshitdotcom')
})
app.get('/login', (req, res) => {
    res.send('<h1> please login chai aur code </h1>')
})
app.listen(port, () => {
    console.log(`Example app listining on port${port}`);

})
