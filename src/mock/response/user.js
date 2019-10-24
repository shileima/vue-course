import Mock from 'mockjs'
export const getUserInfo = options => {
  console.log('Mock')
  const Random = Mock.Random
  const template = {
    'list|5': [{
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
      'email2': '@email', // Mock.mock('@email'),
      'c_title': '@ctitle(8)', // Mock.mock('@title'),
      range: Random.range(2, 20, 5),
      date: Random.date('yyyy-MM-dd'),
      time: Random.time('A hh:mm:ss'),
      datetime: '@datetime("yyyy-MM-dd A hh:mm:ss")', // Random.datetime('yyyy-MM-dd A hh:mm:ss'),
      now: Random.now('second', 'yyyy-MM-dd A hh:mm:ss'),
      img: Random.image('100x200', '#ed2d2d', '#ffffff', '.png', 'loading'),
      img_base64: Random.dataImage(),
      color: Random.color(),
      sentence: '@csentence', // Random.csentence(10, 15),
      paragraph: '@paragraph', // Random.csentence(100, 250)
      en_title: '@title', // Random.title(10, 15),
      c_name: '@cname', // Random.cname(),
      addr: '@county(true)', // Random.county(true),
      upperFirstLetter: Random.capitalize('loaDing'), // capitalize lower
      pick: Random.pick([1, 2, 3, 4]), // pick 任选其一
      shuffle: Random.shuffle(['h', 'e', 'll']), // 打乱数组顺序
      id: Random.id(), // "350000197001187885"
      guid: Random.guid(), // 464c4E4e-09b2-22bb-7578-CB6AE2e077b6
      fruit: Random.fruit(),
      fruit2: '@fruit'
    }]
  }
  /* let i = 5
  let arr = []
  while (i--) {
    arr.push(template)
  }
  return Mock.mock(arr) */
  /* return {
    name: 'lock'
  } */
  return Mock.mock(template)
}
