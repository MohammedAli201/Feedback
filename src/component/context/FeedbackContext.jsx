import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ]);

  const HandleDeleteItem = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  const handleSubmitForm = (newFeedBack) => {
    // we want to append new feedback to the old wone
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleSubmitForm,
        HandleDeleteItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
