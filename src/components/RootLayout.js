import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPanel from './NavPanel';

const RootLayout = () => {
  return (
    <div>
        < NavPanel/>
        <main>
            <Outlet/>
        </main>
      
    </div>
  )
}

export default RootLayout;
