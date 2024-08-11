import { ShoppingCart } from 'lucide-react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../home/Home.module.scss'

const categories = [
  'Electronics',
  'Clothing',
  'Home',
  'Books',
  'Toys',
  'Beauty',
  'Sports',
  'Automotive',
  'Health',
  'Office'
]

const products = [
  {
    name: 'Wireless Headphones',
    date: '2024-08-08',
    city: 'New York'
  },
  {
    name: 'Leather Jacket',
    date: '2024-07-25',
    city: 'Los Angeles'
  },
  {
    name: 'Coffee Maker',
    date: '2024-08-01',
    city: 'Chicago'
  },
  {
    name: 'Smartphone',
    date: '2024-07-30',
    city: 'Houston'
  },
  {
    name: 'Mountain Bike',
    image: 'https://example.com/images/mountain-bike.jpg',
    date: '2024-08-03',
    city: 'San Francisco'
  }
]

const Listings: FC = () => {
  const [category, setCategory] = useState('Electronics')
  const [search, setSearch] = useState('')

  return (
    <div className={styles.tab_listings}>
      <div className={styles.tab_listings__filter}>
        <div className={styles.tab_listings__filter_item}>
          <ul>
            {categories.map((i) => (
              <li
                onClick={() => setCategory(i)}
                className={category === i ? `${styles.active}` : ''}
                key={i}
              >
                {i}
              </li>
            ))}
          </ul>

          <input
            type="text"
            className="input"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.tab_listings__products}>
        {products
          .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
          .map((obj) => (
            <Link className={styles.tab_listings__item} to={`/product/${obj.name}`} key={obj.name}>
              <p>
                <ShoppingCart size={40} color="#fff" />
              </p>
              <p>
                <span>{obj.name}</span>
                <span>{obj.city}</span>
                <span>{obj.date}</span>
              </p>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Listings
