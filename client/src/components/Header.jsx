import logo from '../assets/logo-nobg.svg'
export default function Header() {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <a className='navbar-brand' href="/">
                    <div className="d-flex">
                        <img className='mr-2' src={logo} alt="logo" />
                        <div>project manager</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}
