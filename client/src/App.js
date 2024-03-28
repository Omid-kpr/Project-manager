import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from "./components/Header";
import Clients from './components/Clients';

const cash = new InMemoryCache({
  typepolicies: {
    query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
