import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ExperienceToModify from "./components/ExperienceToModify";
import Jobs from "./components/Jobs";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/jobs/" element={<Jobs />} />
          <Route path="in/me/" element={<Profile />} />
          <Route
            path="in/me/details/experience/"
            element={<ExperienceToModify />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
