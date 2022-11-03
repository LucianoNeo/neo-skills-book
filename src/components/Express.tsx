

export default function ExpressModal() {
  return (
    <section className='w-[850px] h-[750px] bg-slate-800 absolute opacity-95 left-5 -bottom-52 rounded-xl overflow-y-auto'>
      <h1 className="text-2xl p-5">EXPRESS</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col">
          <h2 className="font-bold">Servidor Web</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
             const express = require('express');
             const app = express();
             const port = 3000
             
             
             app.get('/', (req, res) => {
                 res.send("Você está rodando o Express!")
             })
             
             app.listen(port, () => {
                 console.log(Server rodando na porta : http://localhost:3000)
             })
          `}
            </code>
          </pre>

          <h2 className="font-bold">Routes com JWT</h2>
          <a className="p-2 bg-slate-700 rounded" href="https://github.com/LucianoNeo/api-rest-mysql/blob/master/routes/users.js" target='_blank'>GITHUB</a>
        </div>

      </div>
    </section>
  )
}
