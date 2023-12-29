// Components import
import Home from "./components/home";
import CreatePost from "./components/createPost.jsx";
import DetailView from "./components/detailView.jsx";
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/view" element={<DetailView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
