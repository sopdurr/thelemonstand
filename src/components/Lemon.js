import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Lemon = () => {
  var link =
    "http://www.coldist.com/wp-content/uploads/2020/07/Non-Alcoholic-Drink-Ideas.jpg";

  const history = useNavigate();

  const routeChange = () => {
    history("/themenu");
  };

  return (
    <div className="center">
      <Card
        bg="dark"
        border="warning"
        style={{ width: "30rem", color: "yellow" }}
      >
        <Card.Img variant="top" src={link} />
        <Card.Body>
          <Card.Title>Lemonparty</Card.Title>
          <hr></hr>
          <Card.Text>
            Here you can get freshly squeezed juices and the best variety of
            snacks
          </Card.Text>
          <hr></hr>
          <Button
            onClick={routeChange}
            style={{ width: "16rem" }}
            variant="info"
          >
            Make Your Order Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Lemon;
