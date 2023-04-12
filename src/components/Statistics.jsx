import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className="stats">
        <li className="stats-item">
          <span className="stats-label">Good:</span>
          <span className="stats-value">{good}</span>
        </li>
        <li className="stats-item">
          <span className="stats-label">Neutral:</span>
          <span className="stats-value">{neutral}</span>
        </li>
        <li className="stats-item">
          <span className="stats-label">Bad:</span>
          <span className="stats-value">{bad}</span>
        </li>
        <li className="stats-item">
          <span className="stats-label">Total:</span>
          <span className="stats-value">{total()}</span>
        </li>
        <li className="stats-item">
          <span className="stats-label">Positive feedback:</span>
          <span className="stats-value">
            {Math.round(positivePercentage())}%
          </span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
