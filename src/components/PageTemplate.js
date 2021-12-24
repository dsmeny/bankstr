import { useLocation } from "react-router";
import { modiPathName } from "../util/global_util";
import Nav from "./Nav";
import styled from "styled-components";

const PageTemplate = (props) => {
  const { pathname } = useLocation();
  const pName = modiPathName(pathname);
  return (
    <Container>
      <Nav />
      <main>
        <h2>{pName === "" ? "Home" : pName}</h2>
        {props.children}
      </main>
    </Container>
  );
};

const Container = styled.div`
  background: var(--container-bg);
  max-width: 1380px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10rem;
  color: var(--font-color);

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export default PageTemplate;
