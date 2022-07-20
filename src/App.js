import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </div>
  );
};
export default App;
