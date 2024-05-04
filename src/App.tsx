import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import { UserRouter } from "./routers";

function App() {
  const UserRouting = useRoutes(UserRouter);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
