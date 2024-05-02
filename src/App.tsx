import { Route } from "react-router-dom";
import "./App.css";
import { UserRouter } from "./routers";
import { Routes, useRoutes } from "react-router";

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
