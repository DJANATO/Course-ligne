import axios from 'axios'


const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})

axiosPrivate.interceptors.request.use((request)=>{ 
if (!request.headers['authorization']) {
    request.headers['authorization'] =`BEARER ${localStorage?.getItem('token')}`
}
return request

},error=>Promise.reject(error))

export default axiosPrivate