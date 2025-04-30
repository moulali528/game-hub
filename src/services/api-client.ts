import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5bc511c1c0bf4dc5be6890ab88f43fd3'
    }
})