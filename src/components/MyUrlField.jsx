import React from "react";

const MyUrlField = ({ record = {}, source }) => {
  return <a href={`#/businesses/${record.id}/show`}>{record[source]}</a>;
};

export default MyUrlField;
