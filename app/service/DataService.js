import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.withCredentials = true

function generateUrl(relativeUrl) {
    return [process.env.ORTHAN_BASEURL, '/', relativeUrl].join('');
}


var DataService = {
    get: function (relativeUrl, config ={} ) {

        try {
            return axios.get(generateUrl(relativeUrl), config);
        }
        catch (error) {
            console.error(error);
        }
    },
    post: function (relativeUrl, data, config = {}) {
        try {
            return axios.post(generateUrl(relativeUrl), data, config);
        }
        catch (error) {
            console.error(error);
        }
    },

    put: function (relativeUrl, data, config = {}) {
        try {
            return axios.put(generateUrl(relativeUrl), data, config);
        }
        catch (error) {
            console.error(error);
        }
    },

    delete: function (relativeUrl, data = false, config = {}) {
        try {
            if (data)
                return axios.delete(generateUrl(relativeUrl), {data:data}, config);
            else return axios.delete(generateUrl(relativeUrl), config)
        }
        catch (error) {
            console.error(error);
        }
    }
}
export default DataService;