import Landing from "./components/Landing";
import { Outlet, useNavigate } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import { useEffect } from "react";
// import Trial from "./components/Trial";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("");
  }, [navigate]);

  return (
    <>
      <Outlet />
      {/* <Landing /> */}
      {/* <Trial /> */}
      {/* <MainContainer /> */}
    </>
  );
}

export default App;
