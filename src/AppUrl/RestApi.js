import axios from "axios";

class RestApi {

    static GetRequest = (getUrl)=>{
        return axios
        .get(getUrl)
        .then(response=>{
            return response.data;
        })
        .catch(error=>{
            return null;
        });

    };
}
export default RestApi