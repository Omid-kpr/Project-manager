import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Loading from './Loading';

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS)

    if (loading) return <Loading />
    else if (error) {
        console.log(error);
        return <p>مشکلی پیش آمد لطفا دوباره امتحان کنید</p>
    }
    else return (
        <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th>نام</th>
                    <th>ایمیل</th>
                    <th>تلفن</th>
                    <th>حذف</th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client => (
                    <ClientRow key={client.id} client={client} />
                ))}
            </tbody>
        </table>
    )
}
