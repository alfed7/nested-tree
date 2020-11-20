import classes from "./App.module.css";
import { NestedList } from "./components";
import { treeData } from "./data/tree";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

function App() {
  const handleRenderItem = (item) => {
    return <div className={classes.itemBody}>{item.name} ok!</div>;
  };
  return (
    <div className={classes.app}>
      <div className={classes.sideBar}>
        <NestedList
          expandIcon={MdKeyboardArrowRight}
          collapseIcon={MdKeyboardArrowDown}
          data={treeData}
          renderItem={handleRenderItem}
        />
      </div>
      <div className={classes.mainArea}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
}

export default App;
