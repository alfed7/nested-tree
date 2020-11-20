import React from "react";
import PropTypes from "prop-types";
import classes from "./NestedItem.module.css";

const NestedItem = (props) => {
  const {
    node,
    collapseIcon,
    expandIcon,
    isExpanded,
    onToggle,
    canExpand,
    renderItem,
  } = props;
  const ExpandCollapseIcon = isExpanded ? collapseIcon : expandIcon;
  return (
    <div className={classes.root}>
      <div className={classes.expandArea}>
        {canExpand && (
          <button className={classes.expandButton} onClick={onToggle}>
            <ExpandCollapseIcon className={classes.icon} />
          </button>
        )}
      </div>
      {renderItem ? (
        renderItem(node)
      ) : (
        <div className={classes.itemBody}>{node.name}</div>
      )}
    </div>
  );
};

NestedItem.propTypes = {
  canExpand: PropTypes.bool,
  collapseIcon: PropTypes.func,
  expandIcon: PropTypes.func,
  isExpanded: PropTypes.bool,
  node: PropTypes.object,
  onToggle: PropTypes.func,
};

export default NestedItem;
