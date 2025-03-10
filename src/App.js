import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
// import Modal from "./components/layout/modal/Modal";
import ModalManager from "./components/Util/ModalManager";
function App() {
  return (
    <div>
      {/* <Modal /> */}
      <ModalManager />
      <Header />
      <Content />
    </div>
  );
}

export default App;
