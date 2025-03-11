export default function Input({ label, err, ...props }) {
  return (
    <fieldset className="flex flex-col gap-1">
      <label className="w-full font-bold" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={`w-full p-4 rounded-lg border ${
          err ? "border-red-400" : ""
        } bg-transparent`}
        {...props}
      />
      <span className="text-red-400">
        {err ? `${props.name} required` : ""}
      </span>
    </fieldset>
  );
}
