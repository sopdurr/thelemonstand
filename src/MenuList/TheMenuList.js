import { ListGroup } from "react-bootstrap";

const TheMenuList = () => {
  const TheMainMenuDrinks = [
    {
      name: "Lemonade",
      price: "50kr",
      image: "",
    },
    {
      name: "Cranberry Juice",
      price: "40kr",
      image: "",
    },
    {
      name: "Orange Juice",
      price: "35kr",
      image: "",
    },
  ];

  return (
    <div>
      <ListGroup variant="flush">
        {TheMainMenuDrinks.map(function (d, idx) {
          return (
            <ListGroup.Item variant="warning" key={idx}>
              {d.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default TheMenuList;
