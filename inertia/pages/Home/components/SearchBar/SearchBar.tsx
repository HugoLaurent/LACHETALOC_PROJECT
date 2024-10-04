import './search-bar-style.css'
import { useForm } from '@inertiajs/react'

const SearchBar: React.FC = () => {
  const { data, setData, post, errors } = useForm({
    query: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData('query', e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Empêche le rechargement de la page
  }

  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        type="text"
        value={data.query || ''}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className="searchbar-button" type="submit">
        Search
      </button>
      {errors.query && <div className="error-message">{errors.query}</div>}{' '}
      {/* Afficher les erreurs si présentes */}
    </form>
  )
}

export default SearchBar
