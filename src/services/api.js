import axios from "axios";

const URL = 'https://api.covid19api.com/countries'

export async function getCountries() {
    try {
        const { data } = await axios.get(URL);
        return data
    }
    catch (error) {
        console.error(error);
    }
}

export async function getDataCountry(country) {
    try {
        const { data } = await axios.get(`${URL}/${country}`);
        return data
    }
    catch (error) {
        console.error(error);
    }
}