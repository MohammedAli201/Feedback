import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedBackList = () => {
  const { feedback } = useContext(FeedbackContext);
  return feedback.map((feed) => {
    return <FeedbackItem item={feed} />;
  });
};

export default FeedBackList;
