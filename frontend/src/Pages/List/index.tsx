import axios from "axios";
import { Pagination } from "../../components/Pagination";
import { Moviecard } from "../../components/Moviecard";
import { Container, Row, Col } from "react-bootstrap";
import { BASE_URL } from "../../utils/requests";

export const List = () => {

  //TESTE
  axios.get(`${BASE_URL}/movies?size=12&page=0`).then(
    response => {
      console.log(response.data)
    }
  )

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
