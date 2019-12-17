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
  NullableBooleanInput
} from "react-admin";

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
      <TextField source="approved" />
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
      <TextInput multiline source="description" />
      <TextInput source="cuisine" />
      <TextInput source="address" />
      <TextInput source="lat" />
      <TextInput source="lng" />
      <TextInput source="business_type" />

      <NullableBooleanInput
        label="approve?"
        helperText="choose Yes or No to approve business"
        source="approved"
      />
    </SimpleForm>
  </Edit>
);
