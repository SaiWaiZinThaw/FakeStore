import { Route, Routes, useRoutes } from "react-router-dom";
import { UserRouter } from "./routers";
import "./App.css";

function App() {
  const UserRouting = useRoutes(UserRouter);

  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={UserRouting} />
        </Routes>
      </div>
    </>
  );
}

export default App;
