import { useMutation } from '@apollo/client'
import { DELETE_CLIENTS } from '../mutations/clientMutations'
import { FaTrash } from 'react-icons/fa'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQuery'

export default function ClientRow({ client }) {
    const [deleteClient] = useMutation(DELETE_CLIENTS, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    })

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}
