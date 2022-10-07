import { ListGroup } from "react-bootstrap";

const TheSnackList = () => {
  const TheMainMenuSnacks = [
    {
      name: "Nachos",
      price: "50kr",
      image: "",
    },
    {
      name: "Olives",
      price: "25kr",
      image: "",
    },
    {
      name: "French Fries",
      price: "35r",
      image: "",
    },
  ];

  return (
    <div>
      <ListGroup variant="flush">
        {TheMainMenuSnacks.map(function (d, idx) {
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

export default TheSnackList;
