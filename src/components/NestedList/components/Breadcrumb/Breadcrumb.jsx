import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Breadcrumb.module.css";

const Breadcrumb = (props) => {
  const { className, items, onClick } = props;
  const handleClick = (item) => () => {
    onClick(item);
  };
  return (
    <div className={className}>
      {items &&
        items.map((item, i) => (
          <Fragment key={i}>
            {i !== 0 && <span className={classes.divider}>/</span>}
            <button className={classes.crumbButton} onClick={handleClick(item)}>
              {item.name}
            </button>
          </Fragment>
        ))}
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default Breadcrumb;
