import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Canvas } from "./component/Canvas";
import { List } from "./component/List";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Canvas />
          </Col>
          <Col>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
