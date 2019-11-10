const express = require('express')
const app = express()

let bodyParser = require('body-parser')
let jwt = require('jsonwebtoken')
let secret = 'loading'

app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  if (req.method.toLowerCase() === 'options') {
    return res.end()
  }
  next()
})

app.get('/user', (req, res) => {
  setTimeout(() => {
    res.status(200).send({
      username: 'Sean Ma'
    })
  }, 1000)
})

app.get('/userInfo', (req, res) => {
  res.status(200).send({
    username: 'Sean Ma'
  })
})

app.post('/login', (req, res) => {
  let { username } = req.body
  if (username === 'admin') {
    res.json({
      code: 0,
      username: 'admin',
      token: jwt.sign({ username: 'admin' }, secret, {
        expiresIn: 20
      })
    })
  } else {
    res.json({
      code: 1,
      data: '用户名不存在！'
    })
  }
})

// token 验证
app.get('/validate', (req, res) => {
  let token = req.headers.authorization
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      return res.json({
        code: 1,
        data: 'token 失效了'
      })
    } else {
      res.json({
        code: 0,
        username: decode.username,
        token: jwt.sign({ username: 'admin' }, secret, {
          expiresIn: 20
        })

      })
    }
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
