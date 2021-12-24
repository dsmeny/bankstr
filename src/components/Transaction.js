import styled from "styled-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../store";

import { useLocation } from "react-router";
import { modiPathName, statefullPathName } from "../util/global_util";
import Button from "./Button";

const Transaction = () => {
  const { pathname } = useLocation();
  const pName = statefullPathName(modiPathName(pathname));

  const dispatch = useDispatch();
  const { withdraw, deposit } = bindActionCreators(actions, dispatch);

  const inputRef = useRef();

  function transactionHandler() {
    const inputRefValue = +inputRef.current.value;
    pName === "withdraw" ? withdraw(inputRefValue) : deposit(inputRefValue);
  }

  return (
    <Container>
      <input type="number" ref={inputRef} placeholder="$0.00" min="1" />
      <Button submitHandler={transactionHandler} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    border-bottom: 1px solid var(--elem-bg);
    font-size: 1.4rem;
    text-align: center;

    &:focus {
      outline: none;
    }
  }
`;

export default Transaction;
