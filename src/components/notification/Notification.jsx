import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export const Notification = ({ message }) => <Text>{message}</Text>;

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};
