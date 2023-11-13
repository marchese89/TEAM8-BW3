import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MidSection from "./components/ProvaConMidSection";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <MidSection/>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index />
          {/* element={}  */}
          {/* <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
