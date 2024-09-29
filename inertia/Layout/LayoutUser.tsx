import Header from '~/components/Header/Header'

export default function LayoutUser({ children }: any) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
