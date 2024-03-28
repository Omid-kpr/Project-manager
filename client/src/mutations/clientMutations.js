import { gql } from '@apollo/client'

const DELETE_CLIENTS = gql`
    mutation deleteClients($id: ID!) {
        deleteClient(id: $id){
            id
            name
            email
            phone
        }
    }
`;

export { DELETE_CLIENTS };
