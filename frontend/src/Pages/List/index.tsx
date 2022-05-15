import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/requests";
import { Pagination } from "../../components/Pagination";
import { Moviecard } from "../../components/Moviecard";
import { Container, Row, Col } from "react-bootstrap";
import { MoviePage } from "../../types/movie";


export const List = () => {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
      .then(
        response => {
          const data= response.data as MoviePage;
          console.log(data)
          setPageNumber(data.number)
        }
      )
  }, [])

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
