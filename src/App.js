
import Nav from './components/layout/Nav';
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { PostDetail } from "./pages/PostDetail";
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
     <Nav />
     <Outlet />
      
    </>
  );
}

export default App;
