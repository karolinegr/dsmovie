import "./styles.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

type Props = {
  score: number;
};

type StarProps = {
  fill: number;
};

function getFills(score: number) {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

export const Star = ({ fill }: StarProps) => {
  if (fill === 0) {
    return <BsStar />;
  } else if (fill === 0.5) {
    return <BsStarHalf />;
  } else {
    return <BsStarFill />;
  }
};

export const MovieStars = ({ score }: Props) => {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
};
