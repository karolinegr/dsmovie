import { Pagination } from "../../components/Pagination";
import { Moviecard } from "../../components/Moviecard";
import { Container, Row, Col } from "react-bootstrap";

export const List = () => {
  return (
    <>
      <Pagination />
      <Container>
        <Row>
          <Col className="mb-3" xs={12} sm={6} md={4} lg={3} xl={3}>
            <Moviecard />
          </Col>
          <Col className="mb-3" xs={12} sm={6} md={4} lg={3} xl={3}>
            <Moviecard />
          </Col>
          <Col className="mb-3" xs={12} sm={6} md={4} lg={3} xl={3}>
            <Moviecard />
          </Col>
          <Col className="mb-3" xs={12} sm={6} md={4} lg={3} xl={3}>
            <Moviecard />
          </Col>
        </Row>
      </Container>
    </>
  );
};
