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
  ReferenceField,
  Button
} from "react-admin";

const ApproveButton = ({ record }) => {
  console.log(record);
  const [approve, { loading }] = useMutation({
    type: "update",
    resource: "businesses",
    payload: { id: record.id, data: { isApproved: true } }
  });
  return <Button label="Approve" onClick={approve} disabled={loading} />;
};

export const BusinessList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="phone" />
      <EmailField source="email" />
      <TextField source="description" />
      <TextField source="cuisine" />
      <TextField source="address" />
      <TextField source="lat" />
      <TextField source="lng" />
      <TextField source="business_type" />

      <ApproveButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const BusinessEdit = (props, record) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="description" />
      <TextInput source="cuisine" />
      <TextInput source="address" />
      <TextInput source="lat" />
      <TextInput source="lng" />
      <TextInput source="business_type" />
    </SimpleForm>
  </Edit>
);
