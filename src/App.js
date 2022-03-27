import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header.js";
import Navigation from "./component/Navigation";
import Content from "./component/Content";
import Footer from "./component/Footer";
import ExampleLayout from "./component/ExampleLayout";
import LearningDataBinding from "./component/LearningDataBinding";
import ExampleShowRoom from "./component/ExampleShowRoom";

function App() {
  return (
    // <div className="App">
    //   <Header></Header>
    //   <div class="main">
    //     <Navigation></Navigation>
    //     <Content></Content>
    //   </div>
    //   <Footer></Footer>
    // </div>
    <div>
      <LearningDataBinding></LearningDataBinding>
      <ExampleLayout></ExampleLayout>
      <ExampleShowRoom />
    </div>
  );
}

export default App;
