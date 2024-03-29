import { FaExclamationCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <FaExclamationCircle className="text-danger" size='5em' />
            <h1>404</h1>
            <p className="lead">صفحه مورد نظر یافت نشد</p>
            <Link to='/' className="btn btn-primary">خانه</Link>
        </div>
    )
}
