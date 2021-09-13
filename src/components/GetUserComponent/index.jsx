import { useState } from "react";
import "./index.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");
  const HandleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };
  return (
    <form className="user_input">
      Insira seu nome
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
};

export default GetUserComponent;
