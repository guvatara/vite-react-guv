import { BrowserRouter, Routes, Route } from "react-router";
import { Main } from "../pages/main/main";

function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
