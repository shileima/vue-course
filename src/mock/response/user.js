import Mock from 'mockjs'
export const getUserInfo = options => {
  console.log('Mock')
  const Random = Mock.Random
  const template = {
    'str|1-2': 'j',
    'name|2': 'l',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-5.2-5': 0,
    'bool|1-9': true,
    'obj|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [3, 4, 5],
    'func': () => 'created by function',
    'reg': /[1-9][a-z]/,
    'email': Random.email(),
    'email2': Mock.mock('@email'),
    'title': Mock.mock('@title'),
    range: Random.range(2, 20, 5),
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('A hh:mm:ss'),
    datetime: Random.datetime('yyyy-MM-dd A hh:mm:ss'),
    now: Random.now('second', 'yyyy-MM-dd A hh:mm:ss'),
    img: Random.image('100x200', '#ed2d2d', '#ffffff', '.png', 'loading'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    sentence: Random.csentence(2, 3),
    paragraph: Random.csentence(2, 3)
  }
  let i = 5
  let arr = []
  while (i--) {
    arr.push(template)
  }
  return Mock.mock(arr)
  /* return {
    name: 'lock'
  } */
}
