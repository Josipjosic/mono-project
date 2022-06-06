import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Layouts/Menu.module.scss'


const Menu = () => {
  return (
    <div className={style.navbar}>
      <ul className={style.a}>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </ul>
    </div>
  )
};

export default Menu