import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

function ItemList(props) {
  let emptyArray = props.productsList.length === 0;

  return (
    <FlexWrapper>
      {emptyArray ? (
        <Loader color="green" size={128} />
      ) : (
        props.productsList.map((product) => (
          <Item key={product.id} product={product} />
        ))
      )}
    </FlexWrapper>
  );
}

export default ItemList;
