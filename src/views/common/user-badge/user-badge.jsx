import React, { Fragment, useState } from 'react';

import { user_icon, close } from '../../../assets';

import './style.css';
import { logout } from '../../../helper/authenticationhelper';
import { ShowAt } from '..';

function Userbadge(user) {
  const [menuActive, setMenuActive] = useState('');

  if (user.user === undefined) {
    return null;
  }

  const toggleScroll = () => {
    console.log('hello');
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
      document.body.addEventListener(
        'touchmove',
        function (event) {
          event.preventDefault();
          event.stopPropagation();
        },
        false,
      );
    } else {
      document.body.classList.add('no-scroll');
      document.body.removeEventListener(
        'touchmove',
        function (event) {
          event.preventDefault();
          event.stopPropagation();
        },
        false,
      );
    }
  };

  const toggleMenu = () => {
    toggleScroll();
    setMenuActive(menuActive === '' ? 'menu-active' : '');
  };

  return (
    <Fragment>
      <ShowAt breakpoint='1000AndBelow'>
        <div className='user_badge' onClick={() => toggleMenu()}>
          <img alt={user.user.display_name} src={user.user.images[0] === undefined ? user_icon : user.user.images[0].url} className='user_image' />
        </div>
        <div className={`fullscreen-menu ${menuActive}`}>
          <a
            href='/'
            className={`fullscreen-navigation-item ${
              window.location.href.split('/')[3] === '' ? 'fullscreen-navigation-active' : 'fullscreen-navigation-inactive'
            }`}>
            Overview
          </a>
          <a
            href='/artists'
            className={`fullscreen-navigation-item ${
              window.location.href.split('/')[3] === 'artists' ? 'fullscreen-navigation-active' : 'fullscreen-navigation-inactive'
            }`}>
            Artists
          </a>
          <a
            href='/tracks'
            className={`fullscreen-navigation-item ${
              window.location.href.split('/')[3] === 'tracks' ? 'fullscreen-navigation-active' : 'fullscreen-navigation-inactive'
            }`}>
            Tracks
          </a>

          <img src={close} alt='close' className='close-menu' onClick={() => toggleMenu()} />
        </div>
      </ShowAt>

      <ShowAt breakpoint='1000AndAbove'>
        <div className='user_badge'>
          <img alt={user.user.display_name} src={user.user.images[0] === undefined ? user_icon : user.user.images[0].url} className='user_image' />
          <div className='user_information'>
            <p className='user_name'>{user.user.display_name}</p>
            <p className='logout_button' onClick={() => logout()}>
              Logout
            </p>
          </div>
        </div>
      </ShowAt>
    </Fragment>
  );
}

export default Userbadge;
