import styles from './Conditions.module.scss';

export const Conditions = () => {
  return (
    <section className={styles.conditions__wrapper}>
      <div className={styles.conditions__row}>
        <h2>we offer the best conditions</h2>
        <div className={styles.condition}>
          <h3>Full transparency</h3>
          <span>
            We do not hide the stock of our bots or their deals. On the contrary
            we have a live broadcast of the winnings where the results of the
            openings are shown in real time and in the telegram we regularly
            publish posts with the winnings.
          </span>
        </div>
        <div className={styles.condition}>
          <h3>Guaranteed delivery</h3>
          <span>
            We always give out won skins and we do it very quickly. Our
            technical support is ready to resolve the problem at any time.
          </span>
        </div>
      </div>
      <div className={styles.conditions__row}>
        <img className={styles.conditions__img} src="./src/assets/bets.png" />
        <div className={styles.condition}>
          <h3>Skins calculation</h3>
          <span>
            To top up an account with us, you do not have to deposit real money.
            We accept the calculation in skins, which means it is easy to
            replenish the account with unnecessary junk.
          </span>
        </div>

        <div className={styles.condition}>
          <h3>Low prices</h3>
          <span>
            Our cases are cheaper than on Steam, and the loot in them is cooler.
            It is possible to sell the won skins to us and it is much more
            profitable than on the trading platform.
          </span>
        </div>
      </div>
    </section>
  );
};
