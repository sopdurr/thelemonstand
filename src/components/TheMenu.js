import { Button, Card, Badge, ListGroup } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Data } from "../MenuList/theData";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";

import "./TheMenu.css";

const TheMenu = () => {
  const [isDrinks, setIsDrinks] = useState(true);


  const makeTrueOrFalse = () => {
    setIsDrinks(!isDrinks);
  };

  const history = useNavigate();

  const routeChange = () => {
    history("/cart");
  };

  const routeToOverview = () => {
    history("/overview");
  };

  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div className="center">
      <Card bg="dark" border="warning" style={{ width: "35rem" }}>
        <CardHeader style={{ color: "yellow", position: "relative" }}>
          THE MENU
          <span>
            <span onClick={routeChange} className="toTheRight">
              <i
                className="bi bi-basket text-info"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <Badge
                pill
                bg="danger"
                style={{ fontSize: "8px", position: "absolute" }}
              >
                {cart.length}
              </Badge>
            </span>
          </span>
        </CardHeader>

        {isDrinks && (
          <div>
            <CardHeader>
              <Button
                onClick={makeTrueOrFalse}
                variant="warning"
                className="Info"
                style={{ width: "33rem", textAlign: "left" }}
              >
                Beverages and Snacks
                <i className="bi bi-arrow-right-short"></i>
              </Button>
            </CardHeader>
          </div>
        )}

        {!isDrinks && (
          <div>
            <Card.Header onClick={makeTrueOrFalse}>
              <Button
                variant="warning"
                style={{ width: "33rem", textAlign: "left" }}
              >
                Beverages and Snacks
                <i className="bi bi-arrow-down-short"></i>
              </Button>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {Data.map((item, idx) => {
                  item.quantity = 1;
                  return (
                    <ListGroup.Item key={idx}>
                      <span>{item.name}</span>
                      <span> - </span>
                      <span>{item.price} kr.</span>
                      <span style={{ float: "right" }}>
                        <Button
                          style={{ fontSize: "11px" }}
                          className="btn btn-primary btn-sm"
                          onClick={() =>
                            dispatch({ type: "ADD", payload: item })
                          }
                        >
                          ADD
                        </Button>
                      </span>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </div>
        )}
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

export default TheMenu;
