import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import AlertBanner from "../../common/AlertBanner";
import ScoopOption from "./ScoopOptions";
import ToppingOption from "./ToppingOptions";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setErrorState] = useState(false);

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((_) => {
        setErrorState(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
