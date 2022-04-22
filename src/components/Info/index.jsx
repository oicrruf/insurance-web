import React, { Fragment } from "react";
import appInfo from "../../../package.json";
const Info = ({ className }) => {
  return (
    <Fragment>
      <code className={className}>
        <span>name: {appInfo.name}</span>
        <span>version: {appInfo.version}</span>
      </code>
    </Fragment>
  );
};

export default Info;
