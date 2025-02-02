import "./App.css";
import Homepage from "./modules/homepage/Homepage";
import Login from "./modules/user/Login";
import ResetPass from "./modules/user/ResetPass";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import Summary from "./modules/quiz/creator/Summary";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import AboutUs from "./modules/aboutUs/AboutUs";
import CreateQuiz from "./modules/quiz/creator/createQuiz/CreateQuiz";
import AddQuestion from "./modules/quiz/creator/addQuestion/AddQuestion";
import AddInstruction from "./modules/quiz/creator/addQuestion/AddInstruction";
import UserRegister from "./modules/register/UserRegister";
import PreviewInstructions from "./modules/quiz/creator/addQuestion/PreviewInstructions";
import Navbar from "./components/navbar/Navbar";
import Summary from "./components/summary/Summary";
import { AddQuestionHome } from "./modules/quiz/creator/addQuestion/AddQuestionHome";
import {getAuth, GoogleAuthProvider} from "firebase/auth";



const excludedPaths = ['/register', '/login'];
  

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDYiHBWojbp-G_moQs07gZwC-8qQmhDnBM",
    authDomain: "aim2crack.firebaseapp.com",
    projectId: "aim2crack",
    storageBucket: "aim2crack.appspot.com",
    messagingSenderId: "114092626191",
    appId: "1:114092626191:web:e9ded7f577ddfe0511ae7a",
    measurementId: "G-P8SNYR1YDF"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // const location = useLocation();
  // const isExcludedPath = !excludedPaths.includes(location.pathname);

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ResetPass />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/addQuestion" element={<AddQuestion />} />
        <Route path="/addQuestionHome" element={<AddQuestionHome />} />
        <Route path="/addInstruction" element={<AddInstruction />} />
        <Route path="/previewInstructions" element={<PreviewInstructions />} />
        <Route path="/createQuiz" element={<CreateQuiz />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </Router>
    
  );

}

export default App;
