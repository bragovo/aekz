import type { NextPage } from 'next'
import Head from 'next/head'

import GhIcon from '../public/github-icon.svg'
import s from '../styles/IndexPage.module.css'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Фубля</title>
      </Head>

      <div className={s.root}>
        <h1>
          #фубля
        </h1>

        <p>
          Маленькая девочка собирается с мамой на прогулку, мама ее поторапливает:
        </p>

        <p>
          &mdash; Собирайся быстрее, дочка.
          <br />
          &mdash; Сейчас, мамочка, только Фублю возьму!
          <br />
          &mdash; Кого???
        </p>

        <p>
          Девочка убегает в детскую и возвращается с ужасной, замызганой, омерзительной куклой в тряпках вместо платья, с нарисованным маркером лицом, оторванной ногой. Мама, видя это чудовище, ужасается:
        </p>

        <p>
          &mdash; Фу! Бля!!!
          <br />
          &mdash; Вот и папа ее так же называет.
        </p>

        <p>
          &copy; неизвестен
        </p>

        <div className={s.vd} />

        <div className={s.gh}>
          <a href="https://github.com/bragovo/aekz" target="_blank" rel="noreferrer">
            <GhIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default IndexPage
