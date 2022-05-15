import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MoviePage } from "../../types/movie";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: Function;
};
export const Pagination = ({ page, onChange }: Props) => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)}>
          <BsChevronLeft />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};
