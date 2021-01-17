import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID X5SYlAYqpLkEZExeVk73dcLB9T3M6DMBKqBCjquzF60'
    }
})
