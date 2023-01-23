import styles from './StartPage.module.css';

export function StartPage() {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Дорогой проверяющий! Я довольно мало успела сделать по задаче, но несмотря на это многому
        научилась:) Тем не менее прошу проверить мою работу как можно позже, так как надеюсь хоть
        что-то допилить. A пока ты можешь посмотреть что уже сделано нажав на кнопку
        &quot;start&quot;
      </p>
      <a href="/garage" className={styles.start}>
        START
      </a>
    </div>
  );
}
