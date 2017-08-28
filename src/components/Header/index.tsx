import * as React from 'react';
import './header.css';

interface Props {
    title: string;
}

const Header = ( { title }: Props ) =>
    <div className="header">
        <h2>{ title }</h2>
    </div>;

export default Header;
