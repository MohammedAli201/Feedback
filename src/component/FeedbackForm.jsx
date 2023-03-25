import { useState, useEffect, useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Card from "./shared/Card";
import Rating from "./Rating";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const { handleSubmitForm } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isDisabled, setisDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setisDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
      setisDisabled(true);
    } else {
      setMessage(null);
      setisDisabled(false);
      setText(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    if (text !== "") {
      const newFeedback = {
        text,
        rating,
      };

      handleSubmitForm(newFeedback);
    }

    setisDisabled(true); // 👈  add this line to reset disabled
    setRating(10); //👈 add this line to set rating back to 10
    document.getElementById("inputfeedback").value = "";
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How would you rate your service with us?</h4>
        <Rating select={setRating} selected={rating}></Rating>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            id="inputfeedback"
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
