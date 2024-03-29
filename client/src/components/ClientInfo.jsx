import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa'

export default function ClientInfo({ client }) {
    return (
        <>
            <h5 className="mt-5 mb-4">مشخصات کاربر</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <FaIdBadge className="icon" />
                    نام: {client.name}
                </li>
                <li className="list-group-item">
                    <FaEnvelope className="icon" />
                    ایمیل: {client.email}
                </li>
                <li className="list-group-item">
                    <FaPhone className="icon" />
                    تلفن: {client.phone}
                </li>
            </ul>
        </>
    )
}
