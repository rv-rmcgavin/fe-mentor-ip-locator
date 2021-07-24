import styled, { css, DefaultTheme } from 'styled-components';

const DisplayStyled = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => {
    const { colors, breakpoint } = theme;
    return css`
      background-color: ${colors.white};
      border-radius: var(--br);
      color: ${colors.black};
      max-width: 1110px;
      padding: 24px;
      position: absolute;
      text-align: center;
      width: calc(100% - 48px);
      z-index: 500; // the map from leaflet has a 400 z-index.
      
      @media ${breakpoint} {
        bottom: 0;
        display: flex;
        left: 50%;
        padding: 40px 32px;
        text-align: left;
        transform: translate(-50%, 50%);
      }

      & > div:not(:last-of-type) {
        margin-bottom: 24px;

        @media ${breakpoint} {
          margin-bottom: 0;
        }
      }

      .item-container {
        @media ${breakpoint} {
          flex 1 1 25%;
        }
        &:not(:first-of-type) {
          @media ${breakpoint} {
            padding-left: 30px;
          }
        }
        &:not(:last-of-type) {
          margin-bottom: 24px;

          @media ${breakpoint} {
            margin-bottom: 0;
            padding-right: 60px;
            border-right: 1px solid ${colors.neutral['300']};
          }
        }
      }

      .label {
        color: ${colors.neutral['500']};
        font-size: 0.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 12px;
        text-transform: uppercase;

        @media ${breakpoint} {
          font-size: 0.625rem;
        }
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
