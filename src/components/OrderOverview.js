import { Card, ListGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useSelector, useDispatch } from "react-redux";

const OrderOverview = () => {
  const cart = useSelector((state) => state);
  console.log(cart);

  return (
    <div className="center">
      <Card bg="dark" border="warning" style={{ width: "35rem" }}>
        <CardHeader style={{ color: "yellow", position: "relative" }}>
          Order Overview
        </CardHeader>
        <Card.Body>
          <div>
            {cart.map((item, idx) => {
              return (
                <ListGroup key={idx}>
                  <ListGroup.Item>{item.quantity}x {item.name}</ListGroup.Item>
                </ListGroup>
              );
            })}
          </div>
         
        </Card.Body>
        <hr  style={{ color: "yellow", position: "relative"}} ></hr>
        <ListGroup.Item  style={{ color: "yellow", position: "relative", textAlign:'center'}} >THANK YOU FOR THE PURCHASE</ListGroup.Item>
      </Card>
    </div>
  );
};

export default OrderOverview;
