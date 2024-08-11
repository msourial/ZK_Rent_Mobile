import { Settings, Wallet } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '../home/Home.module.scss'

const Profile: FC = () => {
  return (
    <section className={styles.tab_profile}>
      <Link to="/settings">
        <Settings size={24} color="#9095a9" />
        <span>Settings</span>
      </Link>

      <Link to="/wallet">
        <Wallet size={24} color="#9095a9" />
        <span>Wallet</span>
      </Link>
    </section>
  )
}

export default Profile
