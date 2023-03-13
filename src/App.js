import "./App.css";
// import CallBackRefInput from "./components/calbackref/CallBackRefInput";
// import ParentCallBackRef from "./components/calbackref/ParentCallBackRef";
import ButtonContext from "./components/context/ButtonContext";
import Sidebar from "./components/context/Sidebar";
import TabelView from "./components/fragment/TabelView";
// import AddPost from "./components/form/AddPost";
// import ParentForwardingRefButton from "./components/forwardref/ParentForwardingRefButton";
// import Category from "./components/hoc/Category";
// import Posts from "./components/posts/Posts";
// import ParentInputText from "./components/ref/ParentInputText";
// import RefTextInput from "./components/ref/RefTextInput";
// import Button from "./components/Button";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ width: "20%", background: " red", height: "100vh" }}>
        <ButtonContext.Provider value="this is link">
          <Sidebar />
        </ButtonContext.Provider>
      </div>

      <div style={{ width: "80%" }}>
        <TabelView />
        {/* <div>
        <ParentForwardingRefButton />
        </div>
        
        <div>
          <ParentCallBackRef />
        </div>
        <div>
          <ParentInputText />
        </div>
        <div>
          <Category  name="this is categor"/>
        </div>
        <Posts /> */}
        {/* hi
      <Button name="send button" /> */}
        {/* <div>
          <AddPost />
        </div> */}
      </div>
    </div>
  );
}

export default App;
