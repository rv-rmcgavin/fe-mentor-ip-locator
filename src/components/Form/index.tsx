import FormStyled from "./FormStyled";

const Form = () => {
  return (
    <FormStyled>
      <input type="text" className="ip-input" />
      <button className="submit">
        {/* // TODO: Make this SVG a react component. You know you want to. */}
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </FormStyled>
  )
};

export default Form;
