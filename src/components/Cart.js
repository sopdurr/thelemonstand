import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);

  const history = useNavigate();

  const routeChange = () => {
    history("/themenu");
  };

  const routeToOverview = () => {
    history("/overview");
  };

  return (
    <div className="center">
      <Card bg="dark" border="warning" style={{ width: "35rem" }}>
        <CardHeader style={{ color: "yellow", position: "relative" }}>
          CART <span className="onHover" onClick={routeChange} style={{paddingLeft:'460px'}}><i className="bi bi-backspace"></i></span>
        </CardHeader>
        <Card.Body>
          {cart.length === 0 && (
            <div>
              <ListGroup>
                <ListGroup.Item>No product in cart</ListGroup.Item>
              </ListGroup>
            </div>
          )}

          {cart.length >= 1 && (
            <div>
              {cart.map((item) => {
                return (
                  <ListGroup key={item.id}>
                    <ListGroup.Item>
                      <span>{item.name}</span>
                      <span> : </span>
                      <span>{item.price} kr</span>
                      <div>
                        {" "}
                        Total amount for this product :{" "}
                        {item.price * item.quantity} kr
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "green",
                            borderColor: "green",
                          }}
                          onClick={() =>
                            dispatch({ type: "INCREASE", payload: item })
                          }
                        >
                          +
                        </Button>
                      </span>{" "}
                      <span>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "grey",
                            borderColor: "grey",
                          }}
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch({ type: "DECREASE", payload: item });
                            } else {
                              dispatch({ type: "REMOVE", payload: item });
                            }
                          }}
                        >
                          -
                        </Button>
                      </span>{" "}
                      <span>
                        {" "}
                        <Button
                          style={{ backgroundColor: "red", borderColor: "red" }}
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: item })
                          }
                        >
                          remove
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
              <div>
                {" "}
                {total > 0 && (
                  <div style={{ color: "yellow", margin: "10px" }}>
                    total:{total}
                  </div>
                )}
              </div>
            </div>
          )}
        </Card.Body>
        <Card.Body>
        {cart.length === 0 && (
          <Button
            disabled
            onClick={routeToOverview}
            style={{ width: "33rem" }}
            variant="info"
          >
            Order Overview
          </Button>
        )}
        {cart.length >= 1 && (
          <Button
            onClick={routeToOverview}
            style={{ width: "33rem" }}
            variant="info"
          >
            Order Overview
          </Button>
        )}
      </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
