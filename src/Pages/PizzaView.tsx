import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";






const PizzaView : React.FC  = () => {
    const [pizza,setPizza] = useState<{
        imageUrl : string,
        name : string,
        price : number
    }>()
    const {id} = useParams()
    useEffect(() => {
        async function getPizza(){
            const {data} = await axios.get("https://630b6a73ed18e8251652fc87.mockapi.io/pizzas/" + id)
            setPizza(data)
        }
        getPizza()
    } , [])
    console.log(pizza)


    if (!pizza) {
        return <>"Загрузка..."</>
    }

    return (
        <>
            <div>{pizza.name}</div>
            <img src={pizza.imageUrl} alt=""/>
        </>
    );
};

export default PizzaView;