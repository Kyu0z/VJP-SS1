import "./App.css";
import "./index.css";
import Sidebar from "./components/SideBar/Sidebarr";
import FormSignIn from "../../../Trainning/Spotifyy/src/components/Form/FormSignIn";
import { toast } from "react-toastify";

function App() {
  // const notify = () => toast("Wow so easy!");
  return (
    <>
      {/* <Sidebar></Sidebar> */}
      <FormSignIn></FormSignIn>;
      {/* <button onClick={notify}>Notify!</button> */}
    </>
  );
}

export default App;
