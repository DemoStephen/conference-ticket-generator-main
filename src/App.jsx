import { useState } from "react";
import Form from "./UI/Form";
import Header from "./UI/Header";
import Output from "./UI/Output";

export default function App() {
  const [formData, setFormData] = useState({
    image: "",
    name: "Stephen Adewale",
    github: "@demostephen",
    email: "stephen@codewithstephen.com",
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Header data={formData} />
      <Form onSubmit={handleFormSubmit} />
      <Output data={formData} />
    </>
  );
}
