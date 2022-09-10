import { useContext, useEffect, useState } from "react";
import RatingContext from "../context/RatingContext";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import Button from "./shared/Button";
import Box from "./shared/Box";
import Rating from "./Rating";
import $ from "jquery";

function RatingForm() {
  const { addRating, updateRating, edition } = useContext(RatingContext);

  const [rating, setRating] = useState({
    name: "",
    anime: "",
    review: "",
    score: 0,
    image: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
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

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let fileInfo = {
        size: file.size,
        base64: reader.result,
      };
      if (fileInfo.size > 100000) {
        setMessage("Please, chose picture up to 100kB");
        return;
      }
      setRating({ ...rating, image: fileInfo.base64 });
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
    } else {
      if (edition.edit) {
        updateRating(edition.item.id, rating);
      } else {
        addRating(rating);
      }
    }

    setRating({
      name: "",
      anime: "",
      review: "",
      score: 0,
      image: "",
    });

    setMessage("");

    $("#fileControl").val("");
  };

  const symbolsCount = () => {
    if (rating.review !== undefined) {
      return rating.review.length > 0 ? `${rating.review.length}/300` : "0/300";
    } else {
      return "0/300";
    }
  };

  return (
    <Box>
      <form className="Form" onSubmit={handleSubmit}>
        <div>
          <input
            className="Form-input Form-inputSmall"
            type="text"
            name="name"
            value={rating.name || ""}
            onChange={handleChange}
            placeholder="Character name"
            maxLength="20"
          />
          <input
            className="Form-input Form-inputSmall"
            type="text"
            name="anime"
            value={rating.anime || ""}
            onChange={handleChange}
            placeholder="Origin anime"
            maxLength="30"
          />
        </div>
        <textarea
          className="Form-input Form-inputBig"
          type="text"
          name="review"
          value={rating.review || ""}
          onChange={handleChange}
          placeholder="What you like / dislike about character? (optional)"
          maxLength="300"
        />
        <p className="Form-symbolCount">{symbolsCount()}</p>
        <div className="Form-activeControls">
          <label htmlFor="fileControl" className="custom-file-upload">
            <BsFillFileEarmarkArrowUpFill /> Pick Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            multiple={false}
            id="fileControl"
          />
          <Rating
            score={rating.score}
            addScore={(value) => setRating({ ...rating, score: value })}
          />
        </div>
        <Button version="huge" type="submit">
          Send Rating
        </Button>
        {message && <p>{message}</p>}
      </form>
    </Box>
  );
}

export default RatingForm;
