import "./styles.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const MovieStars: any = () => {
  return (
    <div className="dsmovie-stars-container">
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarHalf />
      <BsStar />
    </div>
  );
};
