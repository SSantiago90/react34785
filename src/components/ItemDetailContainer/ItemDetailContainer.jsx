import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../services/firebase";

import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import Loader from "../Loader/Loader";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  let id = useParams().id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        console.log("then:", itemsDB);
        setProduct(itemsDB);
      })
      .catch((error) => {
        setFeedbackMsg(`Error: ${error.message}`);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  // early return - retorn anticipado
  if (isLoading)
    return (
      <FlexWrapper>
        <Loader color="blue" size={128} />
      </FlexWrapper>
    );

  return (
    <div>
      {feedbackMsg ? (
        <span style={{ backgroundColor: "pink" }}>{feedbackMsg}</span>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
