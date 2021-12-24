import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTemplate";
import Content from "../components/Content";
import Selection from "../components/Selection";

const Home = () => {
  const [element, setElement] = useState("");
  const accountType = useState(["Balance", "Withdrawal", "Deposit"]);
  const state = useSelector((state) => state.account);

  useEffect(() => {
    setElement(accountType[0][0]);
  }, []);

  const checkHandler = (e) => {
    const { refElem, radioButton } = e;

    [...refElem.childNodes]
      .filter((node) => node.id !== radioButton.id && node.checked)
      .forEach((node) => (node.checked = false));

    setElement(radioButton.id);
  };

  return (
    <PageTemplate>
      <Content
        amt={
          state[
            `${
              element === "Withdrawal"
                ? element.slice(0, 8).toLowerCase()
                : element.toLowerCase()
            }`
          ]
        }
        selectRef={element}
      />
      <Selection checkHandler={checkHandler} accountType={accountType[0]} />
    </PageTemplate>
  );
};

export default Home;
