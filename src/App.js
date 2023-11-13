import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SidePart from "./components/SidePart";

function App() {
  return (
    <BrowserRouter>
      <SidePart />
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
