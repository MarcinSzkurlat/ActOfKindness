import axios, {AxiosResponse} from 'axios'
import {MyEvent} from "../models/myEvent";

axios.defaults.baseURL = "http://localhost:5092/api"

// getting our body response
const responseBody = <T>(response: AxiosResponse<T>) => response.data

const requests = {
    get: <T>(url: string) =>axios.get<T>(url).then(responseBody),
    post: (url: string, body: {}) =>axios.post(url, body).then(responseBody),
    put: (url: string, body:{}) =>axios.put(url,body).then(responseBody),
    del: (url: string) =>axios.delete(url).then(responseBody),
}

// creating object to store our requests

const Events = {
    list: ()=> requests.get<MyEvent[]>('/event')
}


const agent = {
    Events
}

export default agent