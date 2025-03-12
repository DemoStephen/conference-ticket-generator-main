import upload from "../assets/images/icon-upload.svg";
import info from "../assets/images/icon-info.svg";
export default function Input({ imageInput, label, err, ...props }) {
  return (
    <fieldset className={imageInput ? "" : "flex flex-col gap-1"}>
      <label
        htmlFor={props.id}
        className={`w-full font-bold ${imageInput ? "block mb-1" : ""}`}
      >
        {label}
      </label>
      <input
        className={`${
          imageInput
            ? "hidden"
            : `w-full p-4 rounded-lg border ${
                err ? "border-red-400" : ""
              } bg-transparent`
        }`}
        required
        {...props}
      />
      {imageInput ? (
        <>
          <label
            htmlFor="upload-image"
            className="block text-center p-4 border border-dashed rounded-lg mb-2"
          >
            <img
              className="p-2 rounded-md mx-auto mb-4 border w-1/5"
              src={upload}
              alt="upload icon"
            />
            <p>Drag and drop or click to upload</p>
          </label>
          <span
            className={`${
              err ? "flex" : "hidden"
            } text-red-400 items-center gap-2`}
          >
            <img src={info} alt="info" />
            <small className="text-xs md:text-sm">
              Upload your photo (JPG or PNG, max size: 500KB).
            </small>
          </span>
        </>
      ) : (
        <span className="text-red-400">
          {err ? `${props.name} required` : ""}
        </span>
      )}
    </fieldset>
  );
}
