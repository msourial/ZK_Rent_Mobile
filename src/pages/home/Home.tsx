import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ChevronDown } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './Home.module.scss'

const Home: FC = () => {
  const sortRef = useRef<HTMLDivElement>(null)
  const [listVisible, setListVisible] = useState<boolean>(false)
  const [sortType, setSortType] = useState<string>('Distance')

  const customIcon = new L.Icon({
    iconUrl: 'marker.png',
    iconSize: [20, 32],
    iconAnchor: [0, 0],
    popupAnchor: [10, 0]
  })

  useEffect(() => {
    const closeSort = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setListVisible(false)
      }
    }
    document.body.addEventListener('click', closeSort)
    return () => document.body.removeEventListener('click', closeSort)
  }, [])

  return (
    <section className={styles.home}>
      <div className={styles.tab_home}>
        <input type="text" className="input" placeholder="Search" />

        <div ref={sortRef} className={styles.tab_home__sort}>
          <label onClick={() => setListVisible(!listVisible)}>
            <div>
              <span>Sort by:</span>
              <span>{sortType}</span>
            </div>
            <ChevronDown color="#9095a9" className={listVisible ? `${styles.active}` : ''} />
          </label>
          {listVisible && (
            <ul>
              {['Distance', 'Rental'].map((item) => (
                <li
                  className={sortType === item ? `${styles.active}` : ''}
                  onClick={() => {
                    setSortType(item)
                    setListVisible(false)
                  }}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <MapContainer
        center={[43.665208, -79.39271]}
        zoom={12}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[43.665208, -79.39271]} icon={customIcon}>
          <Popup>Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default Home
