import axios from "axios";

const baseUrl = "https://crud.teamrabbil.com/api"
export async function readRequest (){
    let result = await axios.get(baseUrl + "/v1/ReadProduct")
    return result.data["data"]
}

// export async function createRequest (JSONbody) {
//     let result = await axios.post(baseUrl+"/v1/CreateProduct",JSONbody)
//     return result.data['status']
// }