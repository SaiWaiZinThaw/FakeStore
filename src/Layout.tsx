import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
      <Outlet />
      <footer className="mt-auto p-2 w-full bg-black text-white bottom-0 flex items-center justify-center">
        <span className="text-center">
          Copyright &#169; Ecommerce Shop 2024. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Layout;
