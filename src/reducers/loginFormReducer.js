const initialState = {secondname: '', firstname: '', email: '', password: ''}


const loginFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ONCHANGEEMAIL':
            return {...state, email: action.email}
        case 'ONCHANGEPASSWORD':
            return {...state, password: action.password}
        case 'ONSUCCESS':
            return action.user
        default:
            return state
    }
}

export default loginFormReducer;