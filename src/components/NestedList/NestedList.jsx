import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NestedItem, Breadcrumb } from "./components";
import classes from "./NestedList.module.css";
import clsx from "clsx";

const NestedList = (props) => {
  const {
    className,
    data,
    expandIcon,
    collapseIcon,
    getItemId,
    renderItem,
  } = props;
  const [nestingInfo, setNesting] = useState([{ isRoot: true, name: "All" }]);
  const [items, setItems] = useState(data);
  //const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    setItems(data);
  }, [data]);
  const handleExpand = (node) => () => {
    //setIsExpanded((prev) => !prev);
    setItems(node.children || []);
    setNesting((prev) => [...prev, node]);
  };
  const handleFolderClick = (node) => {
    if (node.isRoot) {
      setItems(data);
      setNesting((prev) => {
        const nesting = [prev[0]];
        return nesting;
      });
      return;
    }
    const id = getItemId ? getItemId(node) : node.id;
    setNesting((prev) => {
      const nesting = [];
      for (const it of prev) {
        const nextId = getItemId ? getItemId(it) : it.id;
        nesting.push(it);
        if (id === nextId) break;
      }
      return nesting;
    });
    setItems(node.children || []);
  };
  return (
    <div className={clsx(classes.root, className)}>
      <div>
        <Breadcrumb items={nestingInfo} onClick={handleFolderClick} />
      </div>
      <div>
        {items &&
          items.map((node) => (
            <NestedItem
              key={node.id}
              node={node}
              expandIcon={expandIcon}
              collapseIcon={collapseIcon}
              onToggle={handleExpand(node)}
              renderItem={renderItem}
              //isExpanded={isExpanded}
              canExpand={node.children && node.children.length > 0}
            ></NestedItem>
          ))}
      </div>
    </div>
  );
};

NestedList.propTypes = {
  className: PropTypes.string,
  collapseIcon: PropTypes.func,
  data: PropTypes.array,
  expandIcon: PropTypes.func,
  getItemId: PropTypes.func,
  renderItem: PropTypes.func,
};

export default NestedList;
