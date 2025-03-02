import css from "./Options.module.css";

export default function Options({ feedBack, data, reset }) {
  return (
    <div className={css.component}>
      <button className={css.button} onClick={() => feedBack("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => feedBack("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => feedBack("bad")}>
        Bad
      </button>
      {data > 0 ? (
        <button className={css.button} onClick={() => reset()}>
          Reset
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
