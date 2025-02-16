import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import Transaction from "./Components/Transaction/Transaction";
import Login from "./Components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transaction />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  console.log(localStorage.getItem("user"));

  return (
    // <>
    //   {localStorage.getItem("user") === null ? (
    //     <Login />
    //   ) : (
    //     <AppStyled bg={bg} className="App">
    //       {orbMemo}
    //       <MainLayout>
    //         <Navigation active={active} setActive={setActive} />
    //         <main>{displayData()}</main>
    //       </MainLayout>
    //     </AppStyled>
    //   )}
    // </>
    <Routes>
      {localStorage.getItem("user") && <Route path="/" exact element={<Main />} />}
      <Route path="/" element={<Home />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/Login" />} />
    </Routes>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    background-color: white;
    // border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
