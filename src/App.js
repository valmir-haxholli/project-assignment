import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from './components/UI/Header';
import Wrapper from './components/UI/HOC/Wrapper';

const App = () => {

  const AppComponent = Wrapper(Header);

  return (
      <>
        <AppComponent />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </>
  );
}

export default App;
