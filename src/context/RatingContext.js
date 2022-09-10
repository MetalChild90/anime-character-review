import { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [reverse, toggleReverse] = useToggle(true);
  const [ratings, setRatings] = useState([
    {
      id: "bb1f58a5-213f-489e-9895-c08fc355c868",
      anime: "xxxholic",
      name: "Yuko",
      score: 4,
      review:
        "ies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);
  const [edition, setEdition] = useState({ edit: false, item: {} });

  const addRating = (newRating) => {
    newRating.id = uuidv4();
    setRatings([newRating, ...ratings]);
  };

  const deleteRating = (id) => {
    setRatings(ratings.filter((item) => item.id !== id));
    setEdition({ edit: false, item: {} });
  };

  const updateRating = (id, updItem) => {
    setRatings(
      ratings.map((item) => (item.id === id ? { ...updItem, id } : item))
    );
    setEdition({ edit: false, item: {} });
  };

  const editRating = (item) => {
    setEdition({ edit: true, item });
  };

  if (reverse) {
    $("body").css("backgroundColor", "#22234d");
  } else {
    $("body").css("backgroundColor", "#efd4e7");
  }

  return (
    <RatingContext.Provider
      value={{
        ratings,
        addRating,
        deleteRating,
        updateRating,
        editRating,
        edition,
        reverse,
        toggleReverse,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
