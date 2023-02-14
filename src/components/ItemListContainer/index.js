import React from 'react';
import { useEffect, useState } from 'react';
import CardComponent from '../CardComponent';
import "./styles.css"
import { Link } from 'react-router-dom';

const ItemListCointainer = ({titulo}) =>{

    const [articulosventa, setArticulosventa] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users')
            .then((response)=>response.json())
            .then((json)=>setArticulosventa(json))
    },[])

    console.log(articulosventa);




    return(
        <div>
        <h1>{titulo}</h1>
        <div id="idArticulosventa">
            {articulosventa.map((articulosventa)=>{
                return (
                    <Link to= {"/detail/" + articulosventa.id} >
                        <div id="articuloespecifico">
                            <CardComponent articulosventa={articulosventa} />
                        </div>
                    </Link>

                )
            })}
        </div>
        </div>

    )
}

export default ItemListCointainer
// Linea 26 debe llamar las Cards