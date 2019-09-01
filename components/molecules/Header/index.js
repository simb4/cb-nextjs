import React from "react";
import Link from 'next/link';
import Typography from "components/atoms/Typography";
import './index.scss'

const Header = () => (
  <div className="header">
    <div className="container d-flex justify-content-between pt-16 pb-16">
      <Link href="/">
        <div className='pointer header__logo d-flex align-items-center'>
          <img className="header__logo__img" src="../../../static/images/logo.png" alt=""/>
          <div className="header__logo__text d-flex flex-column ml-12">
            <Typography
              className='header__logo__text-title'
              variant='h4'
            >
              title
            </Typography>
            <Typography
              className='header__logo__text-description'
              variant='subbody'
            >
              subtitle
            </Typography>
          </div>
        </div>
      </Link>
      <div className="d-flex align-items-center">
        <ul className='d-flex mr-64'>
          <div className='mr-48'>
            <Link href="/somewhere">
              <a className='color_white'>
                Somewhere
              </a>
            </Link>
          </div>
          <div className='mr-48'>
            <Link href="/howtoworks">
              <a className='color_white'>
                Somewhere else
              </a>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
