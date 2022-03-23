import React from 'react';
import AppBar from './AppBar';

const Layout = (props) => {

    const { children } = props;

    return (
        <div>
            <div>
                <AppBar />
            </div>
            <div>
                {children}
            </div>

        </div>
    )
};

export default Layout;
