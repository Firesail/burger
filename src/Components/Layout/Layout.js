import React from 'react';
import Auxy from '../../HOC/Auxy';
import './Layout.css';

const layout = (props) => (
    <Auxy>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className = "Content">
            {props.children}
        </main>
    </Auxy>
);

export default layout; 