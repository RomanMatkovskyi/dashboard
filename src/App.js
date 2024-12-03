import "./App.css";
import { Container } from "./App.styled";

import Hero from "./components/Hero/Hero";
import SideBar from "./components/SideBar/SideBar";
import GeneralInf from "./components/GeneralInf/GeneralInf";

function App() {
  return (
    <Container className="App">
      {/* <Hero /> */}
      {/* <SideBar /> */}
      <GeneralInf />
    </Container>
  );
}

export default App;
