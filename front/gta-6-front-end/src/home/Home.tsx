import { useForm } from 'react-hook-form'
import styles from './Home.module.css'

const isSuccess = false

function Home() {

  const {register} = useForm()

  return (
    <div className={styles.wrapper}>
        <form>
      {isSuccess ? (
        <div className={styles.success}>Форма отправлена</div>
      ) : (
        <>
          <h1>GTA 6 -Оставь заявку</h1>
          <input type="name" placeholder='Введите имя:' />
          <input type="email" placeholder='Введите email:'/>
          <button>Хочу GTA!</button>
        </>
      )}
      </form>
    </div>
  )
}

export default Home
