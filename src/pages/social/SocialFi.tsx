import { User } from 'lucide-react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../home/Home.module.scss'

const participants = [
  { id: 1, name: 'Alice', message: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Bob', message: 'Lorem ipsum dolor sit amet.' },
  { id: 3, name: 'Charlie', message: 'Lorem ipsum dolor sit amet.' }
]

const SocialFi: FC = () => {
  const [search, setSearch] = useState('')

  return (
    <section className={style.tab_chat}>
      <div className={style.tab_chat__search}>
        <div className={style.tab_chat__search_item}>
          <input
            type="text"
            className="input"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={style.tab_chat__list}>
        {participants
          .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
          .map((obj) => (
            <Link to={`/chat/${obj.id}`} className={style.tab_chat__item} key={obj.id}>
              <p>
                <User size={28} color="#c4c4c4" />
              </p>

              <p>
                <span>{obj.name}</span>
                <span>{obj.message}</span>
              </p>
            </Link>
          ))}
      </div>
    </section>
  )
}

export default SocialFi
