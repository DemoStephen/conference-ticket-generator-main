export default function ImageInput() {
  return (
    <>
      <fieldset>
        <label htmlFor="upload-image">Upload Avatar</label>
        <input type="file" name="upload-image" id="upload-image" />
        <label htmlFor="upload-image">
          <img src="/assets/images/icon-upload.svg" alt="upload icon" />
          <p>Drag and drop or click to upload</p>
        </label>
        <p>
          <img src="/assets/images/icon-info.svg" alt="info" />
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </p>
      </fieldset>
    </>
  );
}
