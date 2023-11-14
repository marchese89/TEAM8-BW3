import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<Home />} />
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
