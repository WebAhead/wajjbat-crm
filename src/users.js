import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  useMutation,
  Button
} from "react-admin";

const ApproveButton = ({ record }) => {
  console.log(record);
  const [approve, { loading }] = useMutation({
    type: "update",
    resource: "comments",
    payload: { id: record.id, data: { isApproved: true } }
  });
  return <Button label="Approve" onClick={approve} disabled={loading} />;
};

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <ApproveButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props, record) => (
  <Edit {...props}>
    <SimpleForm>
      {console.log(record)}
      <TextInput source="first_name" />
      <TextInput source="last_name" />
    </SimpleForm>
  </Edit>
);
