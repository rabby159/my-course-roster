/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";

const Items = ({handleAddItems}) => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
                {
                items.map(item => <Item key={item.id} item={item} handleAddItems={handleAddItems}></Item>)
                }
            
        </div>
    );
};

export default Items;