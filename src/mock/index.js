/* eslint-disable space-before-function-paren */
import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

Mock.setup({ timeout: '500-1000' })

// Mock.mock('/api/getUserInfo', getUserInfo)
// Mock.mock(/\/api\/getUserInfo/, { name: 'coding' })
Mock.mock(/\/api\/getUserInfo/, getUserInfo)

/* 自定义Mock Random 拓展 */
Random.extend({
  fruit() {
    const list = ['apple', 'bananer', 'pear'];
    return this.pick(list)
  }
})
export default Mock
