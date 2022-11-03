

export default function JSModal() {
  return (
    <section className='w-[850px] h-[750px] bg-slate-800 absolute opacity-95 right-10 top-20 rounded-xl overflow-y-auto pb-5'>
      <h1 className="text-2xl p-5">JAVASCRIPT</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">MÉTODOS</h2>
          <h3>MAP</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
            const numeros = [1, 2, 3, 4, 5]; 

            const quadrados = numeros.map(item=>{
               return Math.pow(item, 2); 
            });
          `}
            </code>
          </pre>

          <h3>FILTER</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
            var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            function buscarNumerosPares (value) {
                if (value % 2 == 0) 
                return value;
            }
            var numerosPares = numeros.filter(buscarNumerosPares);
            console.log(numerosPares);
          `}
            </code>
          </pre>

          <h2 className="font-bold">FETCH</h2>
          <h3>com .then</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
           fetch(
            'https://carbonfootprint1.p.rapidapi.com/',
            {
              method: 'GET',
              headers: {
                'x-rapidapi-key': 'your_api_key'
              }
            }
          ).then(response => {
            console.log(response);
          });
          `}
            </code>
          </pre>

          <h3>com Async Await</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
           async function getResponse() {
            const response = await fetch(
              'https://carbonfootprint1.p.rapidapi.com/'
                method: 'GET',
                headers: {
                  'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                  'x-rapidapi-key': 'your_api_key'
                }
              }
            );
          }
          `}
            </code>
          </pre>

          <h3>Axios com .then</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
           axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(resp => {
               console.log(resp.data);
           })
           .catch(err => {
               // Handle Error Here
               console.error(err);
           });
          `}
            </code>
          </pre>

          <h3>com Async Await</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
           const sendGetRequest = async () => {
            try {
                const resp = await axios.get('https://jsonplaceholder.typicode.com');
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        
        sendGetRequest();
          `}
            </code>
          </pre>

          <h2>Manipulação de numeros</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
           var n1 = 1545.5
           n1.toFixed(2) 
           n1.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
          `}
            </code>
          </pre>

          <h2>Manipulação de eventos</h2>
          <pre className="p-2 bg-slate-700 rounded mb-10">
            <code >
              {`
           const a= document.getElementById('area')

           a.addEventListener('click', clicar)
           a.addEventListener('mouseenter', entrar)
           a.addEventListener('mouseout', sair)
          `}
            </code>
          </pre>

          <h2>Adicionar elemento html via codigo</h2>
          <pre className="p-2 bg-slate-700 rounded mb-10">
            <code >
              {`
           var item = document.createElement('option') // cria um elemento dentro do SELECT

           tab.appendChild(item) // atribui o item criado ao SELECT a cada ciclo
    
          `}
            </code>
          </pre>


          <h2>Laço for</h2>
          <pre className="p-2 bg-slate-700 rounded mb-10">
            <code >
              {`
           console.log('Vai começar...')

           for (var c = 1; c <= 3; c++){
             console.log(c)
           }
           console.log('FIM') 


           // FOR IN 

          for (let index in num) {
          console.log (A posição {index} tem o valor {num[index]} )
          }
          `}
            </code>
          </pre>


        </div>

      </div>
    </section>
  )
}
