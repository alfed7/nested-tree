import React from "react";
import PropTypes from "prop-types";
import classes from "./NestedItem.module.css";
import clsx from "clsx";

const NestedItem = (props) => {
  const {
    className,
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
    <div className={clsx(classes.root, className)}>
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
  className: PropTypes.string,
  collapseIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  expandIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isExpanded: PropTypes.bool,
  node: PropTypes.object,
  onToggle: PropTypes.func,
};

export default NestedItem;
