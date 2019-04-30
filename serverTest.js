const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World! test'))

app.listen(port, "0.0.0.0", () => console.log(`Example app listening on port ${port}!`))
