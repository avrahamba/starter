const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3000/api/'


import Axios from 'axios';
var axios = Axios.create({
    withCredentials: true
});

const ajax = async (endpoint, method = 'get', data = null) => {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        var title, txt;
        if (err.response.status === 401) {
            title = 'Unathorized!';
            txt = 'You don\'t have permission for this action...';
        } else {
            title = 'Ooops..';
            txt = 'Something went wrong...';
        }
        return { failed: true };
    }
}

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}
