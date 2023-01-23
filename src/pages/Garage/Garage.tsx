import { useAppSelector } from '../../app/hooks';
import styles from './Garage.module.css';
import { Fieldset } from './components/Fieldset';
import { Track } from './components/Track';

export function Garage() {
  const allCars = useAppSelector((state) => state.garage.list);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/garage" className={styles.header__btn}>
          to garage
        </a>
        <a href="/winners" className={styles.header__btn}>
          to winners
        </a>
      </header>
      <div className={styles.car__managment}>
        <form action="" method="get">
          <Fieldset props="create" />
          <Fieldset props="update" />
        </form>
      </div>
      <h2 className={styles.white}>Garage</h2>
      <h3 className={styles.white}>page 1</h3>
      {allCars.map((car) => (
        <Track key={car.id} {...car} />
      ))}
    </div>
  );
}
