import styled, { css, DefaultTheme } from 'styled-components';

const FormStyled = styled.div`
  ${({ theme, error }: { theme: DefaultTheme, error: boolean }) => {
    const { colors, breakpoint } = theme;
    return css`
      margin-bottom: 22px;

      .error {
        color: ${colors.error};
        font-size: 0.625rem;
        text-align: center;
      }
      
      .input-container {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .ip-input {
        border: ${error ? `1px solid ${colors.error}` : 'none'};
        border-radius: var(--br) 0 0 var(--br);
        cursor: pointer;
        font-size: 0.625rem;
        max-width: 498px;
        outline-color: ${colors.neutral['500']};
        padding: 15px 24px;
        width: 100%;

        @media ${breakpoint} {
          font-size: 1rem;
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
