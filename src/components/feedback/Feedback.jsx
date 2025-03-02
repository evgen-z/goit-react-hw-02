import css from "./Feedback.module.css";

export default function Feedback({ feedBackData, totalFeedback, positive }) {
  return (
    <div className={css.component}>
      <p className={css.p}>Good: {feedBackData.good}</p>
      <p className={css.p}>Neutral: {feedBackData.neutral}</p>
      <p className={css.p}>Bad: {feedBackData.bad}</p>
      <p className={css.p}>Total: {totalFeedback}</p>
      <p className={css.p}>Positive: {positive}</p>
    </div>
  );
}
