import PropTypes from 'prop-types';
import { Item } from './statistic-item.styled';

const StatsItem = ({ label, percentage, index }) => {
  return (
    <Item index={index}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Item>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default StatsItem;
