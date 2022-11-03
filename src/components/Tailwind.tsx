

export default function TailwindModal() {
    return (
        <section className='w-[850px] h-[550px] bg-slate-800 absolute opacity-95 left-5 top-40 rounded-xl overflow-y-auto'>
            <h1 className="text-2xl p-5">TAILWIND CSS</h1>
            <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
                <div className="flex flex-col">
                    <span className="font-bold">Instalação</span>
                    <code className="p-2 bg-slate-700 rounded">npm install  -D tailwindcss postcss autoprefixer</code>

                    <span className="font-bold">Iniciar</span>
                    <code className="p-2 bg-slate-700 rounded">npx tailwindcss init -p</code>

                    <span className="font-bold">Configurar arquivo tailwind.config</span>
                    <div className="p-2 bg-slate-700 rounded">
                        <pre>
                            <code>
                                content: [
                                './src/**/*.tsx,*.jsx'
                                ],
                            </code>
                        </pre>
                    </div>
                    <span className="font-bold">Criar arquivo globals.css</span>
                    <code className="p-2 bg-slate-700 rounded">
                        @tailwind base; <br />
                        @tailwind components;<br />
                        @tailwind utilities;<br />
                    </code>

                    <span className="font-bold">Estender Tema</span>
                    <div className="p-2 bg-slate-700 rounded">
                        <pre>
                            {`theme: {
    extend: {
      backgroundImage: {
        app: 'url(/bg.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        ignite: {
          500: '#129E57'
        },
        gray: {
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        },
        yellow: {
          500: '#F7DD43',
          700: '#E5CD3D'
        }
      }
    },
  },`}


                        </pre>
                    </div>


                </div>

            </div>
        </section>
    )
}
