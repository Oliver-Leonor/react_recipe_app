import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './Navbar.css'
import SearchBar from './SearchBar'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Oliver's Recipe</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create New Recipe</Link>
      </nav>
    </div>
  )
}
