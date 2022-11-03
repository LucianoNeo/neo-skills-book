

export default function GitModal() {
    return (
        <section className='w-[850px] h-[750px] bg-slate-800 absolute opacity-95 right-10 top-10 rounded-xl overflow-y-auto'>
            <h1 className="text-2xl p-5">COMANDOS GIT</h1>
            <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
                <div className="flex flex-col">
                    <span className="font-bold">Iniciar Repo</span>
                    <code className="p-2 bg-slate-700 rounded">git init</code>

                    <span className="font-bold">Setar usuário</span>
                    <code className="p-2 bg-slate-700 rounded">git config --global user.name "Luciano Neo"</code>

                    <span className="font-bold">Setar email</span>
                    <code className="p-2 bg-slate-700 rounded">git config --global user.email lucianoneo@gmail.com</code>

                    <span className="font-bold">Adicionar todos os arquivos/diretórios</span>
                    <code className="p-2 bg-slate-700 rounded">git add .</code>

                    <span className="font-bold">Comitar</span>
                    <code className="p-2 bg-slate-700 rounded">git commit -m "minha mensagem de commit"</code>

                    <span className="font-bold">Setar repo remoto</span>
                    <code className="p-2 bg-slate-700 rounded">
                        git remote -v <br />
                        git remote add origin url<br />
                        git remote set-url origin url<br />
                    </code>

                    <span className="font-bold">Alterar Branch</span>
                    <code className="p-2 bg-slate-700 rounded">
                        git branch <br />
                        git branch name <br />
                        git checkout name <br />
                        git checkout -b name <br />
                    </code>

                    <span className="font-bold">Deletar branch</span>
                    <code className="p-2 bg-slate-700 rounded"> git branch –d dev</code>

                    <span className="font-bold">Copiar branch</span>
                    <code className="p-2 bg-slate-700 rounded"> git branch -c main dev</code>

                    <span className="font-bold">Enviar nova branch para o github</span>
                    <code className="p-2 bg-slate-700 rounded">git push --set-upstream origin dev</code>

                    <span className="font-bold">Aplicar uma PR</span>
                    <code className="p-2 bg-slate-700 rounded">
                        git fetch origin pull/1214/head:1080<br />
                        git checkout 1080
                    </code>

                </div>

            </div>
        </section>
    )
}
