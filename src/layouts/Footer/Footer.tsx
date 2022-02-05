import React, { FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    Footer Component
  </div>
);

export default Footer;
