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
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <Header data={formData} />
      {submitted ? (
        <Output data={formData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </>
  );
}
