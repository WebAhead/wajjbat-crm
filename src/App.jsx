import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { UserList, UserEdit } from "./users";
import { BusinessList, BusinessEdit, BusinessShow } from "./business.jsx";

const App = () => {
  return (
    <Admin
      dataProvider={simpleRestProvider(`${process.env.REACT_APP_API}/admin`)}
    >
      <Resource name="users" list={UserList} edit={UserEdit} />
      <Resource
        name="businesses"
        list={BusinessList}
        edit={BusinessEdit}
        show={BusinessShow}
      />
    </Admin>
  );
};
export default App;
