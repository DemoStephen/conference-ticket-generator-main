import { useState } from "react";
import Form from "./UI/Form";
import Header from "./UI/Header";
import Output from "./UI/Output";

export default function App() {
  const [formData, setFormData] = useState({
    image: null,
    name: "Stephen Adewale",
    github: "@demostephen",
    email: "codewithme.stephen@gmail.com",
  });

  return (
    <>
      <Header data={formData} />
      <Form />
      <Output data={formData} />
    </>
  );
}
