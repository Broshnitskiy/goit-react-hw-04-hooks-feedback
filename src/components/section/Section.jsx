import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

Section.prototypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
