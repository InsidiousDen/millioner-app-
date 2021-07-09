import React from 'react'

import data from '../../constants/content'
import styles from './Home.module.scss'

const Home = ({ isGameFinished, setGameStarted, reward }) => {
  return (
    <section className={styles.root}>
      <img src="/images/like.png" alt="like" className={styles.image} />

      <div className={styles.content}>
        {isGameFinished ? (
          <>
            <p className={styles.score}>{data.score}</p>
            <h2 className={styles.title}>{`${reward} ${data.result}`}</h2>
          </>
        ) : (
          <h1 className={styles.title}>{data.title}</h1>
        )}

        <button
          type="button"
          className={styles.button}
          onClick={() => setGameStarted(true)}
        >
          {isGameFinished ? `${data.game.start}` : `${data.game.try}`}
        </button>
      </div>
    </section>
  )
}

export default Home