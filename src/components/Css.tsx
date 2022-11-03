

export default function CssModal() {
  return (
    <section className='w-[650px] h-[650px] bg-slate-800 absolute opacity-95 left-5 top-10 rounded-xl '>
      <h1 className="text-2xl p-5">CSS</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col">
          <h2 className="font-bold">Media Queries</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`@media (max-width: 600px){
            classes
          }`}
            </code>
          </pre>

          <h2 className="font-bold">Keyframes</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
             @keyframes correndo{
              from{
              left: 30px;
              }
              to{
              left:-80px;
              }
          }
          `}
            </code>
          </pre>

          <h2 className="font-bold">Animations</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
             animation: correndo 20s infinite;
          `}
            </code>
          </pre>


          <h2 className="font-bold">Styled components</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
            import styled from 'styled-components';

            
             const Title = styled.h1'
               font-size: 1.5em;
               text-align: center;
               color: palevioletred;
             ';
             
        
             const Wrapper = styled.section
               padding: 4em;
               background: papayawhip;
             ';
             
          
             render(
               <Wrapper>
                 <Title>
                   Hello World!
                 </Title>
               </Wrapper>
             );
          `}
            </code>
          </pre>


        </div>

      </div>
    </section>
  )
}
