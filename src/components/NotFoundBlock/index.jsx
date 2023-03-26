import React from 'react';
import styles from './NotFoundBlock.module.scss';
import sad from '../../assets/images/sad__emoj.svg';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <img src={sad} alt="" width={50} />
        <br />
        Nothing was found
      </h1>
      <p>Sorry, this page is not available right now.</p>
    </div>
  );
};

export default NotFoundBlock;
