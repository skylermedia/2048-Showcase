import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://form.typeform.com/to/yyo48bVj">Contact</Link>
        </li>
        <li>
          <Link to="https://3096.skyler.media/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="https://3096.skyler.media/terms-of-service">Terms of Service</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;