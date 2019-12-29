import React from "react";
import ShowReviews from "./components/ShowReviews";
import MyUrlField from "./components/MyUrlField";
import Toolbar from "./components/TopToolbar";

import {
  List,
  Show,
  SimpleShowLayout,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  BooleanField
} from "react-admin";
import { crudGetList } from "ra-core";

export const BusinessList = props => (
  <List {...props}>
    <Datagrid>
      <MyUrlField source="name" />
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
      <TextInput multiline source="description" />
      <TextInput source="cuisine" />
      <TextInput source="address" />
      <TextInput source="lat" />
      <TextInput source="lng" />
      <TextInput source="business_type" />
    </SimpleForm>
  </Edit>
);

export const BusinessShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="email" />
      <TextField source="description" />
      <TextField source="cuisine" />
      <TextField source="address" />
      <TextField source="lat" />
      <TextField source="lng" />
      <TextField source="business_type" />
      <ShowReviews />
    </SimpleShowLayout>
  </Show>
);
