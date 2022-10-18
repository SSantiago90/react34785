import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemListContainer() {
  return (
    <div>
      <FlexWrapper>
        <Item
          detail="Lorem ipsum"
          price={2100}
          title="Producto 1"
          imgurl="/img/silla1.webp"
        />
        <Item
          detail="Lorem ipsum"
          price={3100}
          title="Producto 2"
          imgurl="https://http2.mlstatic.com/D_NQ_NP_797168-MLA44229654930_122020-O.webp"
        />
        <Item
          detail="Lorem ipsum"
          price={5000}
          title="Producto 3"
          imgurl="https://http2.mlstatic.com/D_NQ_NP_695659-MLA46217963329_052021-O.webp"
        />
      </FlexWrapper>
    </div>
  );
}

export default ItemListContainer;
