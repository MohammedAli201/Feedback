import Header from "./component/Header";
import React, { useState } from "react";
import FeedbackItem from "./component/FeedbackItem";
import FeedBackList from "./component/FeedBackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";

import { FeedbackProvider } from "./component/context/FeedbackContext";
function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container ">
          <FeedbackForm />
          <FeedbackStats />
          <FeedBackList />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
