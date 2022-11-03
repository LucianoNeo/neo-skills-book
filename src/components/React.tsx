

export default function ReactModal() {
  return (
    <section className='w-[850px] h-[750px] bg-slate-800 absolute opacity-95 right-10 top-52 rounded-xl overflow-y-auto '>
      <h1 className="text-2xl p-5">REACT JS</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col">
          <span className="font-bold">React Router DOM</span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import { BrowserRouter, MemoryRouter } from 'react-router-dom'

              <MemoryRouter>
            <UserContext.Provider
                value={{ }}>
                <Router />
            </UserContext.Provider>
        </MemoryRouter>
            `}
            </code>

          </pre>

          <span className="font-bold">Arquivo Router.tsx</span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import React from 'react'
              import { Route, Routes } from 'react-router-dom'
              import Continue from './pages/Continue'
              import Loading from './pages/Loading'
              
              
              export function Router() {
                  return (
              
                      <Routes>
                          <Route path='*' element={<Loading />} />
                          <Route path='/' element={<Loading />} />
                          <Route path='/continue' element={<Continue />} />
                      </Routes>
              
                  )
              
              }
            `}
            </code>

          </pre>

          <span className="font-bold">Context API</span>
          <span className="p-2 bg-slate-700 rounded">
            Criar arquivo de contexto em /context/MyContext.tsx
          </span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import {CreateContext} from 'react'
              
              const MyContext = createContext({})

              export default MyContext
            `}
            </code>
          </pre>

          <span className="p-2 bg-slate-700 rounded">
            No App.tsx
          </span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import {MyContext} from './context/MyContext'
              
              <MyContext.Provider value={{}}>
              <Routes>
              </MyContext.Provider>
            `}
            </code>

          </pre>


          <span className="p-2 bg-slate-700 rounded">
            No componente a ser usado o contexto
          </span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import {useContext} from 'react'
              import {MyContext} from './context/MyContext'
              
              const {user} = useContext(MyContext)
            `}
            </code>

          </pre>

          <span className="font-bold">Apollo Client (GRAPHQL)</span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import { ApolloClient, InMemoryCache} from '@apollo/client'

              // iniciando apollo client
              
              const client = new ApolloClient({
                  uri: 'https://rickandmortyapi.com/graphql/',
                  cache: new InMemoryCache
              })

              export default client
            `}
            </code>

          </pre>
          <span className="font-bold">Apollo Query</span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import { gql } from '@apollo/client'

              const INFO_PERSON = gql ' // mudar ' para acento agudo
                  query {
                      characters {
                          results{
                              id
                              name
                              gender
                              image
                          }
                      }
                  } 
              ' 
              
              export default INFO_PERSON
            `}
            </code>

          </pre>

          <span className="font-bold">No componente que fará a requisição</span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import { useQuery } from '@apollo/client';
              import INFO_PERSON from '../queries';

              const { loading, error, data } = useQuery(INFO_PERSON)


            `}
            </code>

          </pre>




        </div>

      </div>
    </section>
  )
}
