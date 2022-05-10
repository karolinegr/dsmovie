import { Routes, Route } from "react-router-dom";
import { Form } from "./Pages/Form";
import { List } from "./Pages/List";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/form">
        <Route path=":movieId" element={<Form />} />
      </Route>
    </Routes>
  );
};
