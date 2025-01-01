/* eslint-disable react/prop-types */
export default function Input({ label, ...props }) {
  return (
    <>
      <fieldset>
        <label htmlFor={props.id}>{label}</label>
        <input {...props} />
      </fieldset>
    </>
  );
}
