import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput
} from "react-admin";

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props, record) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
    </SimpleForm>
  </Edit>
);
