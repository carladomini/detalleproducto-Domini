import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import Productos from "../Productos";



export const ItemDetailContainer = () => {

const [data] = useState ({});

useEffect (() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(<Productos/>);
        }, 3000);
    });
    getData.then(res => data(res));   
}, [])


    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;