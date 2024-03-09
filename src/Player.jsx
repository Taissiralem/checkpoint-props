import { Card, Image } from "react-bootstrap";

const Player = ({ nom, equipe, nationalite, numero, age, image }) => {
  return (
    <Card className="flexx"
      style={{ 
        width: "18rem",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "25px",
      }}
    >
      <Card.Img variant="top" className="imgg" src={image} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          Equipe: {equipe} <br />
          Nationalité: {nationalite} <br />
          Numéro: {numero} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
