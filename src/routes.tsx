import Home from './pages/Home';
import SwCharacters from './pages/SwCharacters/SwCharacters';
import Page2 from './pages/Page2'
import { Route, Routes } from "react-router-dom";
import React, { useCallback } from 'react';
import './Content.css'

interface IRouteEntry {
  component: JSX.Element,
  path: string,
  key: string
}

const routes: IRouteEntry[] = [{
  component: <Home />,
  path: '/',
  key: 'home'
},
{
component: <SwCharacters />,
path: '/starwars',
key: 'starwars'
},
{
  component: <Page2 />,
  path: '/page2',
  key: 'page2'
}];

export const Routing = () => {
  const createRoute = useCallback(({ component, key, ...rest}: IRouteEntry) => {
  return <React.Fragment key={key}>
    <Route {...rest} element={component} />
  </React.Fragment>
  }, []);

  return (
    <div className="padding10">
  <Routes>
    {routes.map(createRoute)}
  </Routes>
  </div>
  );
};