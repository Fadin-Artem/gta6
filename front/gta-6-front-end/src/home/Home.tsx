import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles.wrapper}>
      <form>
        <h1>GTA 6 - Оставь заявку</h1>
        <input type="name" placeholder='Введите ваше имя: ' />
        <input type="email" placeholder='Введите email:' />
        <button>Хочу GTA!</button>
      </form>
    </div>
  )
}

export default Home
