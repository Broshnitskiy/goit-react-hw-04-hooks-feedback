import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {capitalizeFirstLetter(option)}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.prototypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
