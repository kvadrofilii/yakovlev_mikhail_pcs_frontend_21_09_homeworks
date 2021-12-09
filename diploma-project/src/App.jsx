import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import RequireAuth from "./pages/RequireAuth.jsx";
//import AuthLayout from "./layouts/AuthLayout.jsx";
import PersonsLayout from "./layouts/PersonsLayout.jsx";
import Login from './pages/Login.jsx';
import Persons from './pages/Persons.jsx';
import Page404 from './pages/Page404.jsx';
import Privacy from './pages/Privacy';
import Person from './pages/Person.jsx';
import PersonSetting from './pages/PersonSetting.jsx';
import Registration from './pages/Registration.jsx';
import Test from './pages/Test.jsx';

// TODO: del prod
const token = true;

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>

        <Route index element={<Login />} />
        <Route path={'persons'} element={<PersonsLayout />} >
          <Route index element={<Persons />} />
          <Route path={':userId'} element={<Person />} />
          {/*<Route path={':userId'} element={<PersonSetting />} />*/}
        </Route>

        <Route path={'login'} element={<Login />} />
        <Route path={'registration'} element={<Registration />} />
        <Route path={'privacy'} element={<Privacy />} />
        <Route path={'*'} element={<Page404 />} />

        <Route path={'test'} element={<Test />} />

      </Route>
    </Routes>
  );
}

export default App;


{/*<Route index element={
  <RequireAuth token={token}>

    <Route path={'persons'} element={<PersonsLayout />} >
      <Route index element={<Persons />} />
      <Route path={':userId'} element={<Person />} />
      <Route path={':userId'} element={<PersonSetting />} />
    </Route>
  </RequireAuth>
}>
</Route>*/}

{/*<Route path={'login'} element={<Login />} />*/ }
