import { useParams } from "react-router-dom";
import { FormCard } from "../../components/FormCard";

export const Form = () => {

  const params = useParams();

  return (
    <FormCard movieId={`${params.movieId}`}/>
  );
};
