import { css } from '@emotion/css';
import { colors } from '../../styles/variables';

export const __button = ({ secondary, tertiary, expanded }) => css`
  display: inline-flex;
  padding: 1rem 1.5rem;
  background-color: ${
    secondary
      ? colors.secondary
      : tertiary
        ? colors.tertiary
        : colors.primary
  };
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  ${expanded && `transform: scale(1.1);`}
  transition: transform 150ms cubic-bezier(0.4, 0,0.2, 1);
`;