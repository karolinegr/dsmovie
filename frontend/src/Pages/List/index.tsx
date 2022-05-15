import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/requests";
import { Pagination } from "../../components/Pagination";
import { Moviecard } from "../../components/Moviecard";
import { Container, Row, Col } from "react-bootstrap";
import { MoviePage } from "../../types/movie";

export const List = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber : number) => {
    setPageNumber(newPageNumber)
  }

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />
      <Container>
        <Row>
          {page.content.map((movie) => (
            <Col key={movie.id} className="mb-3" xs={12} sm={6} md={4} lg={3} xl={3}>
              <Moviecard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
