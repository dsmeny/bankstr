import { useEffect, useRef } from "react";
import styled from "styled-components";

const Selection = (props) => {
  const radioRef = useRef();

  useEffect(() => {
    const nodes = [...radioRef.current.childNodes];
    nodes[0].checked = true;
  }, []);

  function selectedElement(e) {
    const refElem = radioRef.current;
    const radioButton = e.target;
    props.checkHandler({ refElem, radioButton });
  }

  return (
    <ul id="list" ref={radioRef}>
      {props.accountType.map((type, index) => (
        <Link onChange={selectedElement} type="radio" id={type} key={index} />
      ))}
    </ul>
  );
};

const Link = styled.input`
  &:checked {
    color: var(--font-color);
  }
`;

export default Selection;
