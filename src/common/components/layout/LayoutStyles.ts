import styled from 'styled-components';
import { Grid } from 'grommet';
import bgIlustration from '../../../res/images/mainPage-illustration.svg';

// eslint-disable-next-line import/prefer-default-export
export const StyledGrid = styled(Grid)<{ size: string }>`
  background: ${(props) =>
    props.size !== 'small'
      ? `url(${bgIlustration}) no-repeat bottom 3rem right 8rem }`
      : undefined};
  background-size: 45%;
`;
