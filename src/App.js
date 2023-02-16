import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { PostDetail } from "./pages/PostDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
