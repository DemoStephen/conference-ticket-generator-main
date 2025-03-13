import { useState } from "react";
import Input from "../Components/Input";
const EMAIL_REGEX = /\S+@\S+\.\S+/;

export default function Form({ onSubmit }) {
  const [formState, setFormState] = useState({
    image: "",
    name: "",
    github: "",
    email: "",
  });

  const [err, setErr] = useState({
    image: null,
    name: null,
    github: null,
    email: null,
  });

  const [loading, setLoading] = useState(false);

  function validateInputs({ image, name, github, email }) {
    const newErr = {
      image: !image,
      name: name.trim() === "",
      github: github.trim() === "",
      email: !EMAIL_REGEX.test(email),
    };
    setErr(newErr);
    return !Object.values(newErr).some(Boolean);
  }

  function handleChange({ target: { name, value } }) {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleFileChange({ target: { files } }) {
    const file = files[0];
    if (file && file.type.startsWith("image/")) {
      const filePath = URL.createObjectURL(file);
      setFormState((prevState) => ({
        ...prevState,
        image: filePath,
      }));
      setErr((prevErr) => ({
        ...prevErr,
        image: null,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        image: "",
      }));
      setErr((prevErr) => ({
        ...prevErr,
        image: true,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateInputs(formState)) {
      setLoading(true);
      onSubmit(formState);
      console.log("Form submitted successfully:", formState);
    } else {
      setLoading(false);
      console.log("Form submission failed due to validation errors.");
    }
  }

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
        onFileChange={handleFileChange}
        filePath={formState.image ?? ""}
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
        disabled={loading}
      >
        {loading ? "Generating Ticket..." : "Generate My Ticket"}
      </button>
    </form>
  );
}
