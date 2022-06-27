// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField} from 'react-admin';
// import MyUrlField from './MyUrlField';
// Removing the website column
// ^ Can replace react-admin's components with personal ones

export const UserList = props => (
    // Applying to all props
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            {/* <MyUrlField source="website" /> */} 
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
// ^ added the phone column to Users
