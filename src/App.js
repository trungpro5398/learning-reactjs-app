import logo from "./logo.svg";
import "./App.css";

import ExampleLayout from "./component/ExampleLayout";
import LearningDataBinding from "./component/LearningDataBinding";
import ExampleShowRoom from "./component/ExampleShowRoom";
import ExampleGameBauCua from "./component/ExampleGameBauCua";
import ShoopingCart from "./component/ShoppingCart";

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
      <ExampleGameBauCua />
      <ShoopingCart />
    </div>
  );
}

export default App;
