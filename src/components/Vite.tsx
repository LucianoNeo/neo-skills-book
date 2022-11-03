

export default function ViteModal() {
  return (
    <section className='w-[850px] h-[500px] bg-slate-800 absolute opacity-95 right-10 -bottom-52 rounded-xl '>
      <h1 className="text-2xl p-5">VITE</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col">
          <span className="font-bold">Criação</span>
          <code className="p-2 bg-slate-700 rounded">
            npm create vite@latest<br />
            npm install
          </code>


        </div>

      </div>
    </section>
  )
}
