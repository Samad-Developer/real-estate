import axios from "axios";

export const baseURL = 'https://bayut.p.rapidapi.com'

export const fetchApi = async ({ url }: { url: string}) => {
    const { data }= await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'b86e7f63c8msh864db39ec01e3a1p14a217jsn9fb4fa388e93',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    console.log("i am here in fetchapi", data)
    return data;
}