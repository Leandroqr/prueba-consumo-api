import { useEffect, useRef, useState } from "react";
import { getCountries } from "../services/api";
import '../App.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const inputRef = useRef()

    useEffect( () => {

        const getData = async () => {
            let data = await getCountries()
            setCountries(data)
            setFilteredCountries(data)
        }

        getData()
    }, [countries])

    // useEffect(() => {
        
    // }, [countries])
    

    function removeDiacritic(texto) {
        return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
    }

    const filterCountries = (e) => {
        let valueText = e.target.value.toUpperCase()

        const newCountries = filteredCountries.filter( el => {
            const searchParam = removeDiacritic(valueText)
    
            return (
                removeDiacritic(el.Country).startsWith(searchParam) 
                ||
                removeDiacritic(el.Slug).startsWith(searchParam) 
                );
            }
        )

        setCountries(newCountries)

        console.log(countries)
        console.log(newCountries)
    }
    
    return (
        <>
            <div>
                <h3>Filtrar:</h3>
                <input  ref={inputRef} onKeyUp={filterCountries} />
            </div>
            <div className="cont__countries">
                {
                    countries?.map( (el,key) => (
                        <div className="card__country" key={key}>
                            {el.Country}
                        </div>
                    ))
                }
            </div>
        
        </>
    )

}

export default Countries

