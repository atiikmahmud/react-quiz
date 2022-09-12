import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Singup";
import PrivateOutlate from './PrivateOutlet';
import PrivateRoute from './PrivateRoute';
import PublicOutlate from './PublicOutlet';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/*" element={ <PublicOutlate /> }>
              <Route path="signup" element={<Signup/>}/>
              <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="quiz" element={<PrivateRoute><Quiz/></PrivateRoute>}/>
            <Route path="/*" element={<PrivateOutlate />}>
              <Route path="result" element={<Result/>}/>
            </Route>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
