import axios from "axios";

const URL = 'https://api.covid19api.com/countries'

export async function getCountries() {
    try {
        const { data } = await axios.get(URL);
        console.log(data);
        return data
    }
    catch (error) {
        console.error(error);
    }
}