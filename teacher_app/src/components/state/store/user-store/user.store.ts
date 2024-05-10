import {createStore} from 'react-sweet-state';

interface UserState {
    email: null | string,
    userId: null | string
}

const initialState:UserState = {
    email: null,
    userId: null,
}

export const userStore = createStore({
    initialState,
    actions: {
        setUser: (email, userId) =>
            ({setState}) => {
                setState({
                    email,
                    userId
                })
            },

    },
    name: 'user-manager'
})

