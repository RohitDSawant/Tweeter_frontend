import * as types from "./action_type";

const int_state= {
    isSigned: false,
    isLoading: false,
    isAuth: false,
    isError: true
}



const auth_reducer = (state= int_state, action) =>{

    const {type} = action


        switch(type){

            case types.SIGNUP_REQUEST : return {
                ...state, isLoading: true
            }

            case types.SIGNUP_SUCCESS : return {
                ...state, isLoading: true, isSigned: true
            }
            
            case types.SIGNUP_FAILURE : return {
                ...state, isLoading: false, isSigned: false, isError: true
            }

            case types.LOGIN_REQUEST : return {
                ...state, isLoading: true
            }

            case types.LOGIN_SUCCESS : return {
                ...state, isLoading: false, isAuth: true
            }
            
            case types.LOGIN_FAILURE : return {
                ...state, isLoading: false, isError: true
            }

            default : return state

        }



}

export default auth_reducer;
