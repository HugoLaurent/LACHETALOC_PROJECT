import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'

export default function LayoutUser({ children }: any) {
  return (
    <div style={{ paddingBottom: '2rem' }}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
