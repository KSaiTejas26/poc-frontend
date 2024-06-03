import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card className="d-flex justify-content-center shadow" style={{ width: "80%" }}>
      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
        <img src={props.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Product" />
      </div>
      <Card.Body style={{ backgroundColor: "#0082c8" }}>
        <Card.Title className="d-flex justify-content-center" style={{ color: 'white' }}>
          <h2><strong>{props.title}</strong></h2>
        </Card.Title>
        <div className="d-flex justify-content-center my-3 marginTop-4">
          <Button variant="primary" style={{ backgroundColor: '#EF3B36' }} rounded="full" ><b>Shop Now</b></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;


