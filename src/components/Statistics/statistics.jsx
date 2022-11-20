import PropTypes from 'prop-types';
import StatsItem from './statistic-item.jsx';
import { StatSection, StatList } from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(({ id, label, percentage }, idx) => (
          <StatsItem
            key={id}
            label={label}
            percentage={percentage}
            index={idx}
          />
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
