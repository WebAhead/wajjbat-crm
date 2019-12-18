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
  BooleanField,
  useMutation,
  TopToolbar,
  Button
} from "react-admin";

const ApproveButton = ({ record }) => {
  console.log(record);
  const [approve, { loading }] = useMutation({
    type: "update",
    resource: "businesses",
    payload: { id: record && record.id, data: { approved: true } }
  });

  const [disApprove, { disApprovedloading }] = useMutation({
    type: "update",
    resource: "businesses",
    payload: { id: record && record.id, data: { approved: false } }
  });

  if (!record) {
    return "";
  }

  return record.approved === "approved" ? (
    <Button
      label="Disapprove"
      onClick={disApprove}
      disabled={disApprovedloading}
    />
  ) : (
    <Button label="Approve" onClick={approve} disabled={loading} />
  );
};

const Toolbar = props => (
  <TopToolbar {...props}>
    <ApproveButton record={props.data} />
  </TopToolbar>
);

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
      <BooleanField source="approved" />
      <EditButton />
    </Datagrid>
  </List>
);

export const BusinessEdit = props => (
  <Edit actions={<Toolbar />} title="Edit business" {...props}>
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
