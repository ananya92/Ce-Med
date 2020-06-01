import axios from 'axios';
import API from "../utils/API";


export const register = newUser => {

    return axios
        .post('/api/user/sign', {
            username: newUser.username,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('/api/user/login', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            console.log("entry matched")

        })
        .catch(err => {
            console.log(err)
        })
}
