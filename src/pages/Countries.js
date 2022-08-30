import { useEffect, useState } from "react";
import { getCountries } from "../services/api";

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect( async () => {

        let data = await getCountries()

        console.log(data)

    }, [])
    


    return (
        <>
        
        
        </>
    )

}

export default Countries

