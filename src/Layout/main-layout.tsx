import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export const MainLayout = () => {


  

  return (
    <main className="">
      <Navbar/>
      <Outlet/>
     
    </main>
  );
};
