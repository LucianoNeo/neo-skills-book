

export default function HtmlModal() {
    return (
        <section className='w-[850px] h-[750px] bg-slate-800 absolute opacity-95 right-10 top-10 rounded-xl overflow-y-auto'>
            <h1 className="text-2xl p-5">HTML SEMANTICO</h1>
            <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
                <div className="flex flex-col">
                    <span className="font-bold">Header</span>
                    <code className="p-2 bg-slate-700 rounded">Cabeçalho</code>

                    <span className="font-bold">Section</span>
                    <code className="p-2 bg-slate-700 rounded">O elemento section representa uma seção dentro de um documento e geralmente contém um título, o qual é definido por meio de um dos elementos entre h1 e h6. Podemos utilizar o section, por exemplo, para descrever as seções/tópicos de um documento.</code>

                    <span className="font-bold">Article</span>
                    <code className="p-2 bg-slate-700 rounded">Utilizamos o elemento article quando precisamos declarar um conteúdo que não precisa de outro para fazer sentido em um documento HTML, por exemplo, um artigo em um blog. É recomendado identificar cada article com um título.</code>

                    <span className="font-bold">Nav</span>
                    <code className="p-2 bg-slate-700 rounded">O elemento nav é utilizado quando precisamos representar um agrupamento de links de navegação, que, por sua vez, são criados com os elementos ul, li e a.</code>

                    <span className="font-bold">Aside</span>
                    <code className="p-2 bg-slate-700 rounded">O elemento aside é utilizado quando precisamos criar um conteúdo de apoio/adicional ao conteúdo principal. Por exemplo, ao falar de HTML semântico, podemos indicar ao leitor outros conteúdos sobre a linguagem HTML como sugestão de leitura complementar.</code>

                    <span className="font-bold">Main</span>
                    <code className="p-2 bg-slate-700 rounded">
                        O elemento main especifica o conteúdo principal e, consequentemente, de maior relevância dentro da página. Para ser considerada bem construída, uma página deve apresentar apenas um conteúdo principal.
                    </code>

                    <span className="font-bold">Figure</span>
                    <code className="p-2 bg-slate-700 rounded">
                        O elemento figure é uma marcação de uso específico para a inserção de uma figura. Para incluir a descrição dessa figura, podemos utilizar o elemento figcaption.
                    </code>

                    <span className="font-bold">Footer</span>
                    <code className="p-2 bg-slate-700 rounded">Rodapé</code>

                    <span className="font-bold">em</span>
                    <code className="p-2 bg-slate-700 rounded">O elemento em é utilizado quando desejamos enfatizar um trecho ou palavra no texto, indicando que ela contribui de forma mais relevante para o sentido/compreensão do conteúdo.</code>

                    <span className="font-bold">cite</span>
                    <code className="p-2 bg-slate-700 rounded">O elemento cite é utilizado para declarar que naquele trecho há uma citação, isto é, um trecho de texto que não foi escrito pelo autor do conteúdo. Normalmente utiliza-se o cite em conjunto com o elemento q, responsável por apresentar o conteúdo retirado de outra fonte.</code>

                    <span className="font-bold">time</span>
                    <code className="p-2 bg-slate-700 rounded">O elemento time é utilizado para representar datas. Assim, caso seja necessário informar a data em que um conteúdo foi escrito, podemos declarar a tag time e acrescentar a ela o atributo datetime para escrever a data de forma padronizada.</code>
                </div>

            </div>
        </section>
    )
}
