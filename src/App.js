import "./App.css";
import Sidebar from "./components/SideBar/Sidebarr";
import FormSignIn from "./components/Form/FormSignIn";
import { toast } from "react-toastify";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  // const notify = () => toast("Wow so easy!");
  return (
    <>
      {/* <Sidebar></Sidebar> */}
      <FormSignIn></FormSignIn>;
      {/* <button onClick={notify}>Notify!</button> */}
      {/* <Dashboard></Dashboard> */}
    </>
  );
}

export default App;
