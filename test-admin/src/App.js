// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./Dashboard";
import authProvider from './authProvider';

// Fetching the data from the JSON server and using that in the dataProvider
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="posts" authProvider={authProvider} list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} />
    </Admin>
);

// From YT video
// function App() {
//   return (
//     <Admin dataProvider={dataProvider}>
//       <Resource 
//         name="users"
//         list={ListGuesser}
//         />
//     </Admin>
//   );
// }

export default App;