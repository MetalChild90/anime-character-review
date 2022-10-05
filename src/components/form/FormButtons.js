import { useContext } from "react";
import RatingContext from "../../context/RatingContext";

function FormButtons({ cleanForm }) {
  const { edition, setEdition } = useContext(RatingContext);

  const handleDiscardChanges = () => {
    cleanForm();
    setEdition({ edit: false, item: {} });
  };
  return (
    <div>
      {edition.edit ? (
        <div className="Form-editButtons">
          <button
            className="Button Button-huge Button-delete"
            onClick={handleDiscardChanges}
          >
            Discard Changes
          </button>
          <button
            className="Button Button-huge Form-saveChangesBtn"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <button className="Button Button-huge" type="submit">
          Send Rating
        </button>
      )}
    </div>
  );
}

export default FormButtons;
