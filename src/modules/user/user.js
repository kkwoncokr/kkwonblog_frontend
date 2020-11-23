export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';



export const initialState = {
    logInDone:false,
    logInLoading:false,
    logInError:null,
    logOutDone:false,
    logOutLoading:false,
    logOutError:null,
    me: null,
    logInData:{},
}

const dummyUser = {
    id:1,
    nickname:'강경원',
    Posts:[],
}

export const loginRequestAction = (data) => {
    return {
        type: LOGIN_REQUEST,
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOGOUT_REQUEST,
    }
}

export default function user (state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST :
            return{
                ...state,
                logInDone:false,
                logInLoading:true,
                logInError:null
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                logInDone:true,
                logInLoading:false,
                me : dummyUser,
                logInData:action.data,
            }
        case LOGIN_FAILURE :
            return {
                ...state,
                logInDone:false,
                logInLoading:false,
                me : null,
                logInError:action.error,
            }
        case LOGOUT_REQUEST :
            return{
                ...state,
                logOutDone:false,
                logOutLoading:true,
                logOutError:null
            }
        case LOGOUT_SUCCESS :
            return {
                ...state,
                logOutDone:true,
                logOutLoading:false,
                me : null,
                logInData:null,
            }
        case LOGOUT_FAILURE :
            return {
                ...state,
                logOutDone:false,
                logOutLoading:false,
                me : null,
                logOutError:action.error,
            }
        default:
            return{
                ...state,
            }
    }
}