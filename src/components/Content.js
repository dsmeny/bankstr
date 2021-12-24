import styled from "styled-components";

const Content = (props) => {
  return (
    <View>
      <h2>{props.selectRef}</h2>
      <p>${props.amt}</p>
    </View>
  );
};

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
  }
`;

export default Content;
