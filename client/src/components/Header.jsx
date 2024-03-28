import logo from '../assets/logo-nobg.svg'
// import styles from index.css
import "../index.css"
export default function Header() {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <a className='navbar-brand' href="/">
                    <div className="d-flex">
                        <img className='mr-2 d-inline-block align-top' width={100} height={40} src={logo} alt="logo" />
                        <div>ایزی پروژه</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}
