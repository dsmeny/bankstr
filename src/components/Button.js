import styled from "styled-components";

const Button = ({ submitHandler }) => {
  return <Btn onClick={submitHandler}>submit</Btn>;
};

const Btn = styled.button`
  padding: 0.8rem;
  background: var(--elem-bg);
  border: none;
  border-radius: 40px;
  width: 6rem;
  color: white;
  box-shadow: var(--shadow);
`;

export default Button;
