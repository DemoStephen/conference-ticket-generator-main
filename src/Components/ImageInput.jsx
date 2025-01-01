export default function ImageInput() {
  return (
    <>
      <fieldset>
        <label htmlFor="upload-image" className="w-full font-bold block mb-1">Upload Avatar</label>
        <input type="file" name="upload-image" id="upload-image" className="hidden"/>
        <label htmlFor="upload-image" className="block text-center p-4 border border-dashed rounded-lg mb-2">
          <img className="p-2 rounded-md mx-auto mb-4 border" src="/src/assets/images/icon-upload.svg" alt="upload icon" />
          <p>Drag and drop or click to upload</p>
        </label>
        <p className="flex items-center gap-2">
          <img src="/src/assets/images/icon-info.svg" alt="info" />

          <small>Upload your photo (JPG or PNG, max size: 500KB).</small>
        </p>
      </fieldset>
    </>
  );
}
