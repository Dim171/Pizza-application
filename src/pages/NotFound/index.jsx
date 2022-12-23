import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.format}>
      <span>😳</span>
      <br />
      <h1>Страница не найдена ...</h1>
    </div>
  );
};

export default NotFound;
