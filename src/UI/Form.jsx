import ImageInput from "../Components/ImageInput";
import Input from "../Components/Input";

export default function Form() {
  return (
    <form action="#">
      <ImageInput />
      <Input label="Full Name" id="full-name" type="text" name="full-name" />
      <Input
        label="Email Name"
        id="email-name"
        type="email"
        name="email-name"
        placeholder="example@email.com"
      />
      <Input
        label="GitHub Username"
        id="github"
        type="text"
        name="github"
        placeholder="@yourusername"
      />
      <button type="submit">Generate My Ticket</button>
    </form>
  );
}
