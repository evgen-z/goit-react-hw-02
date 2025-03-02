import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Description from "./description/Description.jsx";
import Options from "./options/Options.jsx";
import Feedback from "./feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";

function App() {
  const [feedBackData, setFeedBackdata] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedbackState");

    if (savedFeedback !== "undefined") {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbackState", JSON.stringify(feedBackData));
  }, [feedBackData]);

  const updateFeedback = (feedbackType) => {
    setFeedBackdata((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedBackdata((prevState) => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  const totalFeedback = feedBackData.good + feedBackData.neutral + feedBackData.bad;
  const positiveFeedback = Math.round(
    (feedBackData.good / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        feedBack={updateFeedback}
        data={totalFeedback}
        reset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedBackData={feedBackData}
          totalFeedback={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
