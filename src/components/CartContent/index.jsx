import styles from './CartContent.module.scss';
import { Link } from 'react-router-dom';
import cart__black from '../../assets/images/cart__black.svg';
import bin from '../../assets/images/bin.svg';
import hdd from '../../assets/images/hdd.svg';
import close from '../../assets/images/close.svg';
const CartContent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={cart__black} alt="" width={30} />
          <span>Shopping cart</span>
        </div>
        <div className={styles.emptyCart}>
          <img src={bin} alt="" width={18} />
          <span>Empty the shopping cart</span>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.leftBox}>
            <img src={hdd} alt="" width={50} />
            <div className={styles.title}>Intel Core i9 12900H</div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.manageItems}>
              <div className={styles.add}>+</div>
              <div className={styles.numberOfItemsAdded}>3</div>
              <div className={styles.minus}>-</div>
            </div>
            <div className={styles.totalPrice}>990 $</div>
            <div className={styles.delete}>
              <img src={close} alt="" width={30} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeftRow}>
          <div className={styles.totalNumOfItems}>
            Total items: <strong>1</strong>
          </div>
          <Link className={styles.link} to={'/'}>
            {'< Back'}
          </Link>
        </div>
        <div className={styles.bottomRightRow}>
          <div className={styles.totalAmountOfMoney}>
            Order price: <span>990 $</span>
          </div>
          <button>Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
