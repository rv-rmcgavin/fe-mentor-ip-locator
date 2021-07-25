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
        cursor: pointer;
        font-size: 1rem;
        max-width: 498px;
        outline-color: ${colors.neutral['500']};
        padding: 15px 24px;
        width: 100%;

        &:invalid {
          border: 1px solid red;
        }
      }

      .submit {
        background-color: ${colors.black};
        border: none;
        border-radius: 0 var(--br) var(--br) 0;
        cursor: pointer;
        padding: 13px 23.5px;
        height: 100%;
        &:active {
          background-color: ${colors.blackActive};
        }
      }
    `;
  }}
`;

export default FormStyled;
