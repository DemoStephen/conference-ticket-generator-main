import { useState } from "react";
import Form from "./UI/Form";
import Header from "./UI/Header";
import Output from "./UI/Output";

export default function App() {
  const [info, setInfo] = useState({
    image: null,
    name: "Stephen Adewale",
    github: "@demostephen",
    email: "codewithme.stephen@gmail.com",
  });

  const [view, setView] = useState(null);

  function handleInfo(info) {
    setInfo(info);
  }

  function handleView() {
    setView(true);
  }

  return (
    <>
      <Header data={info} />
      {view ? (
        <Output data={info} />
      ) : (
        <Form handleView={handleView} handleInfo={handleInfo} />
      )}
    </>
  );
}
