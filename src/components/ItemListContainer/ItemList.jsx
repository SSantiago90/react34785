import React from 'react'
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <div>
    {props.productsList.map((product) => (
      <Item
        key={product.id}
        product={product}
      />    
    ))}
    </div>    
  )
}

export default ItemList