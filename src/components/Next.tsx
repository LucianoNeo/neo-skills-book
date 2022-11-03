

export default function NextModal() {
  return (
    <section className='w-[850px] h-[750px] bg-slate-800 absolute opacity-95 right-10 -bottom-72 rounded-xl overflow-y-auto'>
      <h1 className="text-2xl p-5">NEXT JS</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col">
          <span className="font-bold">Criação</span>
          <code className="p-2 bg-slate-700 rounded">
            npx create-next-app@latest<br />
            npm run dev
          </code>

          <span className="font-bold">Navigate/Link</span>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              import Link from 'next/link'

              function Home() {
                return (
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/blog/hello-world">Blog Post</Link>
                    </li>
                  </ul>
                )
              }
            `}
            </code>

          </pre>




          <span className="font-bold">SSR com revalidate e Promise All</span>

          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`export const getStaticProps: GetStaticProps = async () => {

const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
  api.get('pools/count'),
  api.get('guesses/count'),
  api.get('users/count')
])

return {
  props: {
    poolCount: poolCountResponse.data.count,
    guessCount: guessCountResponse.data.count,
    userCount: userCountResponse.data.count
  },
  revalidate: 60 * 10
}
}`}
            </code>
          </pre>


          <span className="font-bold">SWR com refetch</span>
          <code className="p-2 bg-slate-700 rounded">
            import useSWR from "swr"
          </code>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
               async function getRaids(url) {
                const raidsData = await axios(url);
                const raidsResponse = await raidsData.data
                const raidsSWR = raidsResponse.response.raids
                return raidsSWR
              }

              const raidsData = useSWR('api/raids', getRaids,
                {
                  refreshInterval: 180000,
                  revalidateIfStale: true,
                  refreshWhenOffline: true,
                  fallbackData: raidsSSR
                }
              ).data
             `}
            </code>
          </pre>
        </div>

      </div>
    </section>
  )
}
