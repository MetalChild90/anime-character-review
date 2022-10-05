import { useCallback, useContext, useEffect, useState } from "react";
import RatingContext from "../../context/RatingContext";
import Box from "../shared/Box";
import StarRating from "./StarRating";
import FormInput from "./FormInput";
import FormImageInput from "./FormImageInput";
import FormButtons from "./FormButtons";

function RatingForm() {
  const { addRating, updateRating, edition } = useContext(RatingContext);

  const [rating, setRating] = useState({
    name: "",
    anime: "",
    review: "",
    score: 0,
    image: null,
  });

  // eslint-disable-next-line
  const [fileInputRef, setFileInputRef] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
    setRating({
      name: edition.item.name,
      anime: edition.item.anime,
      review: edition.item.review,
      score: edition.item.score,
      image: edition.item.image,
    });
  }, [edition]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRating({ ...rating, [name]: value });
  };

  const handleImageChange = (e) => {
    setMessage("");
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let fileInfo = {
        size: file.size,
        base64: reader.result,
        name: file.name,
      };
      if (fileInfo.size > 100000) {
        setMessage("Please, chose picture up to 100kB");
        return;
      }
      setRating({
        ...rating,
        image: { file: fileInfo.base64, name: fileInfo.name },
      });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      rating.name === undefined ||
      rating.name === "" ||
      rating.name === null
    ) {
      setMessage("Please, choose character name");
      return;
    } else if (
      rating.anime === undefined ||
      rating.anime === "" ||
      rating.anime === null
    ) {
      setMessage("Please, choose anime series character came from");
      return;
    } else if (
      rating.score === undefined ||
      rating.score === 0 ||
      rating.score === null
    ) {
      setMessage("Please, choose score");
      return;
    } else if (
      rating.review === undefined ||
      rating.review === "" ||
      rating.review === null ||
      rating.review.length < 50
    ) {
      setMessage("Review must be at least 50 characters");
      return;
    } else {
      if (edition.edit) {
        updateRating(edition.item.id, rating);
      } else {
        addRating(rating);
      }
    }

    cleanForm();
  };

  const symbolsCount = useCallback(() => {
    if (rating.review !== undefined) {
      return rating.review.length > 0 ? `${rating.review.length}/300` : "0/300";
    } else {
      return "0/300";
    }
  }, [rating.review]);

  const cleanForm = () => {
    setRating({
      name: "",
      anime: "",
      review: "",
      score: 0,
      image: null,
    });

    setMessage("");

    setFileInputRef(null);
  };

  return (
    <Box>
      <form className="Form" onSubmit={handleSubmit} autoComplete="off">
        <div>
          <FormInput
            name="name"
            value={rating.name || ""}
            placeholder="Character name"
            handleChange={handleChange}
          />
          <FormInput
            name="anime"
            value={rating.anime || ""}
            placeholder="Origin anime"
            handleChange={handleChange}
          />
          <textarea
            className="Form-input"
            type="text"
            name="review"
            value={rating.review || ""}
            onChange={handleChange}
            placeholder="What you like / dislike about character?"
            maxLength="300"
          />
          <p className="Form-symbolCount">{symbolsCount()}</p>
        </div>
        <div className="Form-activeControls">
          <FormImageInput
            handleImageChange={handleImageChange}
            setFileInputRef={setFileInputRef}
          />
          <StarRating
            score={rating.score}
            addScore={(value) => setRating({ ...rating, score: value })}
          />
        </div>
        <FormButtons cleanForm={cleanForm} />
        {message && <p className="Form-message">{message}</p>}
      </form>
    </Box>
  );
}

export default RatingForm;
