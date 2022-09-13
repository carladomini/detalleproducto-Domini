import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount/itemCount";
import ItemList from "./ItemList/Item";
import Productos from "./Productos";

const Itemlistcontainer = (props) => {
    const [data, setData] = useState([]);

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
              resolve(<Productos/>);
            }, 3000);
        });
        getData.then(res => setData(res));
        
    }, [])

    const onAdd = (quantity) => {
      console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList data={data}/>
        </div>
    )
}

export default Itemlistcontainer;