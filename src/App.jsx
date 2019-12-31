import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { UserList, UserEdit } from "./users";
import { BusinessList, BusinessEdit, BusinessShow } from "./business.jsx";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BusinessIcon from '@material-ui/icons/Business';

const App = () => {
  return (
    <Admin
      dataProvider={simpleRestProvider(`${process.env.REACT_APP_API}/admin`)}
    >
      <Resource name="users" list={UserList} edit={UserEdit} icon={AccountBoxIcon} />
      <Resource
        name="businesses"
        list={BusinessList}
        edit={BusinessEdit}
        show={BusinessShow}
        icon={BusinessIcon}
      />
    </Admin>
  );
};
export default App;
