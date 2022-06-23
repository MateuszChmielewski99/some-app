import Home from './common/components/pages/Home';
import SwCharacters from './starwars/pages/SwCharacters';
import Page2 from './page2/pages/Page2'
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
  path: '/starwars/:tabKey',
  component: <SwCharacters />,
  key: 'starwars'
},
{
  path: '/starwars/',
  component: <SwCharacters />,
  key: 'starwars'
},
{
  component: <Page2 />,
  path: '/page2',
  key: 'page2'
}];

export const Routing = () => {
  const createRoute = useCallback(({ component, key, ...rest }: IRouteEntry) => {
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