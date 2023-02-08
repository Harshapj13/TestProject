import { GET_POST } from "../Constants/Constant"

export const AppData = (data) =>{
    console.log(data)
    return {
        type:GET_POST,
        data:data
    }
}