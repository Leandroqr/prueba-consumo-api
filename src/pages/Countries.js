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
    }, [])
    

    function removeDiacritic(texto) {
        return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
    }

    const filterCountries = (e) => {
        let valueText = e.target.value.toUpperCase()

        const newCountries = countries.filter( el => {
            const searchParam = removeDiacritic(valueText)
    
            return (
                removeDiacritic(el.Country).startsWith(searchParam) 
                ||
                removeDiacritic(el.Slug).startsWith(searchParam) 
                );
            }
        )

        setFilteredCountries(newCountries)
    }
    
    return (
        <>
            <div className="container">
                <div style={{textAlign: 'center'}}>
                    <input  ref={inputRef} onKeyUp={filterCountries} placeholder="Buscar un pais" className="inputFilter" />
                </div>

                <div className="cont__countries">
                    {filteredCountries.length === 0 && <div>No se encontraron resultados</div>}
                    {
                        filteredCountries?.map( (el,key) => (
                            <div className="card__country" key={key}>
                                {el.Country}
                            </div>
                        ))
                    }
                </div>
            </div>
        
        </>
    )

}

export default Countries

