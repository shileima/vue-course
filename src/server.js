let express = require('express')
let app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS')
  next()
})
app.post('/api/getUserInfo', (req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*')
  console.log(' 请求成功！')
  res.status(200).send({
    code: 200,
    data: {
      name: 'loading'
    }
  })
})

app.listen(3001, () => { console.log('Server listen on port 3001') })
