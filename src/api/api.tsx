import axios from "axios";
import { setupInterceptors } from "./setupInterceptors";

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
})

setupInterceptors(api)
    
export default api