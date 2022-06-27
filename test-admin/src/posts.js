/// in src/posts.js
import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter
} from 'react-admin';

// Superior version to support mobile
// export const PostList = (props) => {
//   const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
//   return (
//       <List {...props}>
//           {isSmall ? (
//               <SimpleList
//                   primaryText={record => record.title}
//                   secondaryText={record => `${record.views} views`}
//                   tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
//               />
//           ) : (
//               <Datagrid>
//                   <TextField source="id" />
//                   <ReferenceField label="User" source="userId" reference="users">
//                       <TextField source="name" />
//                   </ReferenceField>
//                   <TextField source="title" />
//                   <TextField source="body" />
//                   <EditButton />
//               </Datagrid>
//           )}
//       </List>
//   );
// }
// CONNECTING TO A REAL API

const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source='id' />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);
// ^ added the body column in Post


// Inferior version to support mobile
// export const PostList = (props) => (
//   <List {...props}>
//       <SimpleList
//           primaryText={record => record.title}
//           secondaryText={record => `${record.views} views`}
//           tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
//       />
//   </List>
// );

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
