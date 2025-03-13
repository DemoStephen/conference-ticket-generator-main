import { useState } from "react";
import Input from "../Components/Input";

export default function Form({ onSubmit }) {
  const [formState, setFormState] = useState({
    image: "",
    name: "",
    github: "",
    email: "",
    feedback: null,
  });

  const [err, setErr] = useState({
    image: null,
    name: null,
    github: null,
    email: null,
  });

  const validateInputs = (formData) => {
    const newErr = {
      image: !formData.image,
      name: !formData.name,
      github: !formData.github,
      email: !formData.email,
    };
    setErr(newErr);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!err.image && !err.github && !err.email && !err.name) {
      setFormState((prev) => ({ ...prev, feedback: true }));
      onSubmit(formState);
      console.log(formState);
    }
    validateInputs(formState);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 md:w-4/5 lg:w-3/6 m-auto flex flex-col gap-4"
    >
      <Input
        imageInput={true}
        label="Upload Avatar"
        id="upload-image"
        type="file"
        name="upload-image"
        err={err.image}
        onChange={handleChange}
        value={formState.image}
      />
      <Input
        label="Full Name"
        id="full-name"
        type="text"
        name="name"
        placeholder="Stephen Adewale"
        err={err.name}
        onChange={handleChange}
        value={formState.name}
      />
      <Input
        label="Email Name"
        id="email-name"
        type="email"
        name="email"
        placeholder="stephen@codewithstephen.com"
        err={err.email}
        onChange={handleChange}
        value={formState.email}
      />
      <Input
        label="GitHub Username"
        id="github"
        type="text"
        name="github"
        placeholder="@demostephen"
        err={err.github}
        onChange={handleChange}
        value={formState.github}
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-slate-900 p-3 rounded-lg font-extrabold cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
