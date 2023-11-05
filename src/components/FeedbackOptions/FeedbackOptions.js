export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return(
          <li key={option}>
            <button id={option} onClick={e => onLeaveFeedback(e)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
