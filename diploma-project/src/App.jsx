import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions/user.js";
import Layout from "./layouts/Layout.jsx";
import RequireAuth from "./hoc/RequireAuth.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from './pages/Login.jsx';
import Persons from './pages/Persons.jsx';
import Page404 from './pages/Page404.jsx';
import Privacy from './pages/Privacy';
import Person from './pages/Person.jsx';
import PersonSetting from './pages/PersonSetting.jsx';
import Registration from './pages/Registration.jsx';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  //useEffect(() => {
  //  dispatch(auth())
  //}, []);

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>

        {/*<Route path={'persons'} element={<RequireAuth />}>
          <Route index element={<Persons />} />
          <Route path={'persons/:id'} element={<Person />} />
          <Route path={'person-setting'} element={<PersonSetting />} />
        </Route>*/}

        <Route element={<AuthLayout />} >
          <Route path={'login'} element={<Login />} />
          <Route path={'registration'} element={<Registration />} />
        </Route>

        <Route path={'privacy'} element={<Privacy />} />
        <Route path={'*'} element={<Page404 />} />
        <Route path={'person-setting'} element={<PersonSetting />} />

        <Route path={'persons'} element={<PersonsLayout />}>
          <Route index element={<Persons />} />
          <Route path={':id'} element={<Person />} />
        </Route>


      </Route>
    </Routes>
  );
}


function PersonsLayout() {
  return (
    <Outlet />
  )
}

export default App;
