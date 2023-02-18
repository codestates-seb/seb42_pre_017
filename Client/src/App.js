import Nav from "./components/layout/Nav";
import { Outlet } from "react-router-dom";
import faker from "faker";
function App() {
  console.log(faker.internet.email());
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
