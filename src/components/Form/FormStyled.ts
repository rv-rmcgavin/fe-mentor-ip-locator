import styled, { css, DefaultTheme } from 'styled-components';

const FormStyled = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => {
    const { colors } = theme;
    return css`
      align-items: center;
      display: flex;
      justify-content: center;
      margin-bottom: 22px;

      .ip-input {
        border: none;
        border-radius: var(--br) 0 0 var(--br);
        font-size: 1rem;
        outline-color: ${colors.neutral['500']};
        padding: 15px 24px;
      }

      .submit {
        background-color: ${colors.black};
        border: none;
        border-radius: 0 var(--br) var(--br) 0;
        padding: 13px 23.5px;
        height: 100%;
      }
    `;
  }}
`;

export default FormStyled;
