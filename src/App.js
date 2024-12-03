import "./App.css";
import { Container } from "./App.styled";

import Hero from "./components/Hero/Hero";
import SideBar from "./components/SideBar/SideBar";
import GeneralInf from "./components/GeneralInf/GeneralInf";
import CustomersInf from "./components/CustomersInf/CustomersInf";

function App() {
  return (
    <Container className="App">
      {/* <Hero /> */}
      {/* <SideBar /> */}
      {/* <GeneralInf /> */}
      <CustomersInf />
    </Container>
  );
}

export default App;
