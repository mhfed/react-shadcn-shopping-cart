import { IUser } from '@/common/type'
import instance from '@/core/api'

export const signup = async (user: IUser) => {
  try {
    const response = await instance.post(`/signup`, user)
    return response.data
  } catch (error) {
    console.log(`SIGNUP_ERROR`, error)
    throw error
  }
}
export const signin = async (user: IUser) => {
  try {
    const response = await instance.post(`/signin`, user)
    return response.data
  } catch (error) {
    console.log(`SIGNIN_ERROR`, error)
    throw error
  }
}
