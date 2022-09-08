import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Singup";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="quiz" element={<Quiz/>}/>
            <Route path="result" element={<Result/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
