import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

function FormImageInput({ rating, handleImageChange, setFileInputRef }) {
  return (
    <div>
      <label htmlFor="fileControl" className="Form-file-input">
        <BsFillFileEarmarkArrowUpFill /> Pick Image
      </label>
      <input
        type="file"
        onChange={handleImageChange}
        ref={(ref) => {
          setFileInputRef(ref);
        }}
        multiple={false}
        id="fileControl"
      />
      {rating?.image?.name && (
        <p className="Form-image-name">{rating?.image?.name}</p>
      )}
    </div>
  );
}

export default FormImageInput;
