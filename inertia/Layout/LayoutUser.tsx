import Header from '~/Header/Header'

export default function LayoutUser({ children }: any) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
