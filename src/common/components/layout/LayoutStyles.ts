import styled from 'styled-components';
import { Box, Grid } from 'grommet';
import bgIlustration from '../../../res/images/mainPage-illustration.svg';

// eslint-disable-next-line import/prefer-default-export
export const StyledGrid = styled(Grid)<{
  size: string;
  displayBackground: boolean;
}>`
  background: ${({ size, displayBackground }) =>
    size !== 'small' && displayBackground
      ? `url(${bgIlustration}) no-repeat bottom 3rem right 8rem }`
      : undefined};
  background-size: 45%;
`;

export const StyledMainBox = styled(Box)<{ marginLeft?: string }>`
  margin-left: ${(props) => props.marginLeft};
`;
