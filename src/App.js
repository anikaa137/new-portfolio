import NavBar from "./components/NavBar/NavBar";
import { Scrollbars } from "react-custom-scrollbars";
import AnimatedCursor from "react-animated-cursor";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Body from "./components/Body/Body";

// scrollbar-section-start
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 10,
    backgroundColor: "#afb42b",
    marginRight: 0,
    // width: 4,
    // right: 1,

    // opacity: 1
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const renderView = ({ style, ...props }) => {
  return (
    <div className="sm:-ml-3.5  md:-ml-px " style={{ ...style }} {...props} />
  );
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    renderView={renderView}
    {...props}
  />
);
// scrollbar-section-end
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="0, 21, 31"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <div class="App">
        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
       
          <Router>
          <NavBar />
            <Banner />
            <Body/>
          </Router>
        </CustomScrollbars>
      </div>
    </>
  );
}

export default App;

// https://codesandbox.io/s/react-custom-scrollbar-scrolltotop-forked-k5zwe?file=/src/Scrollbar.tsx:793-1135
