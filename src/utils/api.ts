import axios from "axios";



export async function getNumberData() {
    return await axios.get<string>('http://numbersapi.com/42')
}
type MyAuthResp = {
    token: string
}