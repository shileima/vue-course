import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.setup({ timeout: '500-3000' })

// Mock.mock('/api/getUserInfo', getUserInfo)
// Mock.mock(/\/api\/getUserInfo/, { name: 'coding' })
Mock.mock(/\/api\/getUserInfo/, getUserInfo)

export default Mock
