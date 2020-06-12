import * as axios from "axios";


const initialState = {
    success: false,
    error: false,
    loading: false
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contacts-reducer/sendDataToMailSuccess':
            return {
                ...state, success: true
            }
        case 'contacts-reducer/sendDataToMailError':
            return {
                ...state, error: true
            }
        default: return state
    }
}

export const sendDataSuccessAC = () => ({type: 'contacts-reducer/sendDataToMailSuccess'})
export const sendDataErrorAC = () => ({type: 'contacts-reducer/sendDataToMailError'})

export const sendDataTC = (name, email, message) => {
    return async(dispatch) => {
       const res = await axios.post('https://smtp-for-portfolio.herokuapp.com/sendMessage',
           {name,email,message})
        console.log(res)
        res.data === 'Success'? dispatch(sendDataSuccessAC()) : dispatch(sendDataErrorAC())
    }
}

export default contactsReducer;