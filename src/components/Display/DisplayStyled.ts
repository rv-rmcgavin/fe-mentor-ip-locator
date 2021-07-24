import styled, { css, DefaultTheme } from 'styled-components';

const DisplayStyled = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
      border-radius: var(--br);
      color: ${colors.black};
      padding: 24px;
      position: absolute;
      text-align: center;
      width: calc(100% - 48px);
      z-index: 500; // the map from leaflet has a 400 z-index.

      & > div:not(:last-of-type) {
        margin-bottom: 24px;
      }

      .label {
        color: ${colors.neutral['500']};
        font-size: 0.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 12px;
        text-transform: uppercase;
      }

      .value {
        color: ${colors.neutral['700']};
        font-weight: 500;
        line-height: 1;
      }
    `;
  }}
`;

export default DisplayStyled;
