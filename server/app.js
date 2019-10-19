const express = require('express')
const app = express()

app.all('/userInfo', (req, res) => {
  res.status(200).send({
    username: 'Sean Ma'
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
