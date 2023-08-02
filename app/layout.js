import './assets/css/main.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body>
          <Header></Header>
              {children}
          <Footer></Footer>
        </body>
      </html>
    </>

  
  )
}