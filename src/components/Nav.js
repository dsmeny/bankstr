import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navigation>
      <Link to="/">
        <h1>Bankstr</h1>
      </Link>
      <ul>
        <Link to="/Withdraw-money">
          <li>withdraw</li>
        </Link>
        <Link to="/Deposit-money">
          <li>deposit</li>
        </Link>
      </ul>
    </Navigation>
  );
};

const Navigation = styled.nav`
  background: var(--nav-bg);
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--pad);
  font-size: var(--text-size-h2);

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 10rem;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
  }
`;

export default Nav;
