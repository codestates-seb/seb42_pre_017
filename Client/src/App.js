import Nav from "./components/layout/Nav";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
