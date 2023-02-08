import { GET_POST } from "../Constants/Constant";
const initialState = {
    AppData : []
}


export const ReduceAppData = (state = initialState, action)=>{
    switch (action.type) {
        case GET_POST:
            console.warn("reducer",action)
            return {                
                ...state,
                AppData:action.data
            }
            break;
    
        default:
            return state
            break;
    }
}