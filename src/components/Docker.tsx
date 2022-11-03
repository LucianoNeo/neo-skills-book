

export default function DockerModal() {
  return (
    <section className='w-[950px] h-[700px] bg-slate-800 absolute opacity-95 left-5 -bottom-10 rounded-xl overflow-y-auto'>
      <h1 className="text-2xl p-5">DOCKER</h1>
      <div className="bg-slate-900 w-full h-full text-gray-200 p-5">
        <div className="flex flex-col">
          <h2 className="font-bold">DockerFile</h2>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
              FROM node

              WORKDIR /src/app
              
              COPY package.json .
              
              RUN npm install
              
              COPY . .
              
              EXPOSE 3000
              
              CMD ["node","index.js"]
              `}
            </code>
          </pre>

          <h3 className="font-bold">Build</h3>

          <code className="p-2 bg-slate-700 rounded">
            {`
             docker build -t node-express-img .
          `}
          </code>


          <h3 className="font-bold">Rodar</h3>

          <code className="p-2 bg-slate-700 rounded">
            docker run -d -p 3000:3000 --name node-express node-express-img
          </code>

          <h3 className="font-bold">Baixar Imagem</h3>
          <code className="p-2 bg-slate-700 rounded">
            docker pull nome_da_imagem
          </code>

          <h3 className="font-bold">Listar Imagens</h3>
          <code className="p-2 bg-slate-700 rounded">
            docker image ls
          </code>

          <h3 className="font-bold">Remover Imagem</h3>
          <code className="p-2 bg-slate-700 rounded">
            docker rmi id_da_imagem
          </code>

          <h3 className="font-bold">Remover container</h3>
          <code className="p-2 bg-slate-700 rounded">
            docker rm id_do_container
          </code>

          <h2>DOCKER COMPOSE</h2>

          <h3>Arquivo docker-compose.yml</h3>
          <pre className="p-2 bg-slate-700 rounded">
            <code >
              {`
  version: "3"
  services:
      database:
          image: mysql:5.7.20
          restart: always
          environment:
              MYSQL_ROOT_PASSWORD: 12345
              MYSQL_DATABASE: usuarios
              MYSQL_USER: dbadmin
              MYSQL_PASSWORD: dbpassword
          volumes:
              - "data:/var/lib/mysql"
      webserver:
          image: webdevops/apache:alpine
          depends_on:
              - php
          ports: 
              - "80:80"
              - "443:443"
          volumes: 
              - ".:/var/www/html"
          environment:
              WEB_PHP_SOCKET: "php:9000"
              WEB_PHP_TIMEOUT: 600
              WEB_DOCUMENT_ROOT: "/var/www/html"
      php:
          image: mlalbuquerque/php:7.1
          build:
              context: ./dockerfiles
              dockerfile: php7.1.dockerfile
              args:
                  - "UID=$UID"
                  - "GID=$GID"
                  - "USER=$USER"
          volumes:
              - ".:/var/www/html"
              - "./dockerfiles/config/php.ini:/usr/local/etc/php/php.ini"
              - "./dockerfiles/config/xdebug.ini:/usr/local/etc/php/conf.d/docker-php-ext-xini"
          environment:
              PATH: "/root/.composer/vendor/bin:{PATH}"
  volumes:
      data:
              `}
            </code>
          </pre>
        </div>

      </div>
    </section>
  )
}
