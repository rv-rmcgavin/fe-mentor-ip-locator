import styled, { css, DefaultTheme } from 'styled-components';
// TODO: Maybe clean this component up to not use colors or theme.

const ControlStyled = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => {
    const { colors } = theme;
    return css`
      background-image: url('/pattern-bg.png');
      min-height: 300px;
      position: relative;
      padding: 32px 24px;

      h1 {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.1;
        margin-bottom: 32px;
        text-align: center;
      }
    `;
  }}
`;

export default ControlStyled;
