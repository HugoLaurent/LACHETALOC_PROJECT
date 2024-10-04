import { useForm } from '@inertiajs/react'

export default function Login() {
  const { data, setData, post } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
    post('/login-user')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setData('email', e.target.value)}
          value={data.email}
          autoComplete="email"
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setData('password', e.target.value)}
          value={data.password}
          autoComplete="password"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
