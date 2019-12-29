import React from "react";
import { TopToolbar } from "react-admin";
import ApproveButton from "./ApproveButton";

const Toolbar = props => (
  <TopToolbar {...props}>
    <ApproveButton record={props.data} />
  </TopToolbar>
);

export default Toolbar;
