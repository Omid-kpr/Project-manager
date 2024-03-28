import { gql } from '@apollo/client'

const ADD_CLIENT = gql`
    mutation addClient($name: String!, $email: String!, $phone: String!) 
    {
        addClient(name: $name, email: $email, phone: $phone) 
        {
            id
            name
            email
            phone
        }
    }`

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

export { DELETE_CLIENTS, ADD_CLIENT };
