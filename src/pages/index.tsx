import Category from '../components/Category'
import Avatar from '../../public/img/avatar.png'
import Front from '../../public/img/front-end.png'
import Back from '../../public/img/back-end.png'
import Mobile from '../../public/img/mobile.png'
import Devops from '../../public/img/devops.png'
import Version from '../../public/img/versionamento.png'
import Package from '../../public/img/package.png'
import JS from '../../public/img/js.png'
import Git from '../../public/img/git.png'
import Github from '../../public/img/github.png'
import Npm from '../../public/img/npm.webp'
import Yarn from '../../public/img/yarn.png'
import React from '../../public/img/react.png'
import Framework from '../../public/img/framework.png'
import Next from '../../public/img/nextjs.png'
import Expo from '../../public/img/expo.png'
import Python from '../../public/img/python.png'
import Node from '../../public/img/nodejs.png'
import Express from '../../public/img/express.png'
import Fastify from '../../public/img/fastify.png'
import FLask from '../../public/img/flask.webp'
import Linux from '../../public/img/linux.png'
import Aws from '../../public/img/aws.jpg'
import Gcp from '../../public/img/gcp.png'
import Docker from '../../public/img/docker.webp'
import Html from '../../public/img/html.png'
import Css from '../../public/img/css.png'
import Sass from '../../public/img/sass.png'
import Tailwind from '../../public/img/tailwind.png'
import Fastapi from '../../public/img/fastapi.svg'
import Django from '../../public/img/django.png'
import Vite from '../../public/img/vite.svg'


import Blob from '../../public/img/blobanimation.svg'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import SubCategory from '../components/SubCategory'
import * as Dialog from '@radix-ui/react-dialog'
import GitModal from '../components/Git'
import HtmlModal from '../components/Html'
import TailwindModal from '../components/Tailwind'
import ViteModal from '../components/Vite'
import NextModal from '../components/Next'
import ReactModal from '../components/React'
import JSModal from '../components/Javascript'
import CssModal from '../components/Css'
import DockerModal from '../components/Docker'
import ExpressModal from '../components/Express'


export default function Home() {
  const [category, setCategory] = useState<string[]>([])



  const divRef = useRef<any>(null);


  function handleSelection(value: string) {

    if (category.includes(value)) {
      return true
    } else {
      return false
    }
  }
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [category])



  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-10 items-center '>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-10 items-center'>
            <div className='flex gap-10'>
              <Dialog.Root >
                <Dialog.Trigger className='items-start justify-start text-left'>
                  <SubCategory
                    icon={Git}
                    text='git'
                    color='bg-blue-800'
                    selected={handleSelection('git')}
                    onclick={() => setCategory(['versionamento', 'git'])}
                    visible={handleSelection('versionamento')}
                  />
                </Dialog.Trigger>
                <Dialog.Content>
                  <GitModal />
                </Dialog.Content>
              </Dialog.Root>

              <SubCategory
                icon={Github}
                text='github'
                color='bg-blue-800'
                selected={handleSelection('github')}
                onclick={() => setCategory(['versionamento', 'github'])}
                visible={handleSelection('versionamento')}
              />
            </div>


            <Category
              icon={Version}
              text='versionamento'
              color='bg-blue-800'
              selected={handleSelection('versionamento')}
              onclick={() => setCategory(['versionamento'])}
            />
          </div >
          <div className='flex flex-col gap-10 items-center'>
            <div className='flex gap-10'>
              <SubCategory
                icon={Npm}
                text='npm'
                color='bg-blue-500'
                selected={handleSelection('npm')}
                onclick={() => setCategory(['gerenciadores', 'npm'])}
                visible={handleSelection('gerenciadores')}
              />
              <SubCategory
                icon={Yarn}
                text='yarn'
                color='bg-blue-500'
                selected={handleSelection('yarn')}
                onclick={() => setCategory(['gerenciadores', 'yarn'])}
                visible={handleSelection('gerenciadores')}
              />

            </div>
            <Category
              icon={Package}
              text='Gerenciadores de pacote'
              color='bg-blue-500'
              selected={handleSelection('gerenciadores')}
              onclick={() => setCategory(['gerenciadores'])}
            />
          </div>
        </div>
        {/* <Image
          className='absolute z-[-1] bottom-40'
          src={Blob}
          alt='icon'
        /> */}
        <div className='flex items-center justify-center gap-10'>
          <div className='h-20 w-20 rounded-full overflow-hidden bg-white'>

            <Image
              src={Avatar}
              alt='icon'
            />
          </div>
          <h1 className='font-bold text-5xl text-gray-200'>NEO SKILLS BOOK</h1>
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col items-center gap-10 '>
            <Category
              icon={Front}
              text='Front-End'
              color='bg-[#03274F]'
              selected={handleSelection('Front-End')}
              onclick={() => setCategory(['Front-End'])}
            />
            <div className='flex gap-10 pl-[380px]'>
              <div className='flex flex-col gap-10'>
                <Dialog.Root >
                  <Dialog.Trigger>
                    <SubCategory
                      icon={JS}
                      text='Javascript TypeScript'
                      color='bg-[#03274F]'
                      selected={handleSelection('javascript')}
                      onclick={() => setCategory(['Front-End', 'javascript'])}
                      visible={handleSelection('Front-End')}
                    />
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <JSModal />
                  </Dialog.Content>
                </Dialog.Root>

                <SubCategory
                  icon={JS}
                  text='bibliotecas'
                  color='bg-[#03274F]'
                  selected={handleSelection('bibliotecas')}
                  onclick={() => setCategory(['Front-End', 'javascript', 'bibliotecas'])}
                  visible={handleSelection('javascript')}
                />
                <Dialog.Root >
                  <Dialog.Trigger>
                    <SubCategory
                      icon={React}
                      text='reactjs'
                      color='bg-[#03274F]'
                      selected={handleSelection('reactjs')}
                      onclick={() => setCategory(['Front-End', 'javascript', 'bibliotecas', 'reactjs'])}
                      visible={handleSelection('bibliotecas')}
                    />
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <ReactModal />
                  </Dialog.Content>
                </Dialog.Root>


                <SubCategory
                  icon={Framework}
                  text='frameworks'
                  color='bg-[#03274F]'
                  selected={handleSelection('frameworks')}
                  onclick={() => setCategory(['Front-End', 'javascript', 'bibliotecas', 'reactjs', 'frameworks'])}
                  visible={handleSelection('reactjs')}
                />

                <Dialog.Root >
                  <Dialog.Trigger>
                    <SubCategory
                      icon={Next}
                      text='nextjs'
                      color='bg-[#03274F]'
                      selected={handleSelection('nextjs')}
                      onclick={() => setCategory(['Front-End', 'javascript', 'bibliotecas', 'reactjs', 'frameworks', 'nextjs'])}
                      visible={handleSelection('frameworks')}
                    />
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <NextModal />
                  </Dialog.Content>
                </Dialog.Root>


                <Dialog.Root >
                  <Dialog.Trigger>
                    <SubCategory
                      icon={Vite}
                      text='vite'
                      color='bg-[#03274F]'
                      selected={handleSelection('vite')}
                      onclick={() => setCategory(['Front-End', 'javascript', 'bibliotecas', 'reactjs', 'frameworks', 'vite'])}
                      visible={handleSelection('frameworks')}
                    />
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <ViteModal />
                  </Dialog.Content>
                </Dialog.Root>

                <div ref={divRef} />
              </div>
              {/* <Dialog.Root >
                <Dialog.Trigger> */}
              <SubCategory
                icon={Html}
                text='html5'
                color='bg-[#03274F]'
                selected={handleSelection('html')}
                onclick={() => setCategory(['Front-End', 'html'])}
                visible={handleSelection('Front-End')}
              />
              {/* </Dialog.Trigger>
                <Dialog.Content>
                  <HtmlModal />
                </Dialog.Content>
              </Dialog.Root> */}

              <div className='flex flex-col items-center gap-10'>
                <Dialog.Root >
                  <Dialog.Trigger>
                    <SubCategory
                      icon={Css}
                      text='css3'
                      color='bg-[#03274F]'
                      selected={handleSelection('css')}
                      onclick={() => setCategory(['Front-End', 'css'])}
                      visible={handleSelection('Front-End')}
                    />
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <CssModal />
                  </Dialog.Content>
                </Dialog.Root>

                <SubCategory
                  icon={Framework}
                  text='frameworks'
                  color='bg-[#03274F]'
                  selected={handleSelection('frameworks-css')}
                  onclick={() => setCategory(['Front-End', 'css', 'frameworks-css'])}
                  visible={handleSelection('css')}
                />

                <SubCategory
                  icon={Sass}
                  text='sass'
                  color='bg-[#03274F]'
                  selected={handleSelection('sass')}
                  onclick={() => setCategory(['Front-End', 'css', 'frameworks-css', 'sass'])}
                  visible={handleSelection('frameworks-css')}
                />
                <Dialog.Root >
                  <Dialog.Trigger>
                    <SubCategory
                      icon={Tailwind}
                      text='tailwind css'
                      color='bg-[#03274F]'
                      selected={handleSelection('tailwind-css')}
                      onclick={() => setCategory(['Front-End', 'css', 'frameworks-css', 'tailwind-css'])}
                      visible={handleSelection('frameworks-css')}
                    />
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <TailwindModal />
                  </Dialog.Content>
                </Dialog.Root>

              </div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <Category
              icon={Mobile}
              text='mobile'
              color='bg-purple-900'
              selected={handleSelection('mobile')}
              onclick={() => setCategory(['mobile'])}
            />

            <SubCategory
              icon={JS}
              text='Javascript TypeScript'
              color='bg-purple-900'
              selected={handleSelection('javascript-mobile')}
              onclick={() => setCategory(['mobile', 'javascript-mobile'])}
              visible={handleSelection('mobile')}
            />
            <SubCategory
              icon={JS}
              text='bibliotecas'
              color='bg-purple-900'
              selected={handleSelection('bibliotecas-mobile')}
              onclick={() => setCategory(['mobile', 'javascript-mobile', 'bibliotecas-mobile'])}
              visible={handleSelection('javascript-mobile')}
            />
            <SubCategory
              icon={React}
              text='react-native'
              color='bg-purple-900'
              selected={handleSelection('react-native')}
              onclick={() => setCategory(['mobile', 'javascript-mobile', 'bibliotecas-mobile', 'react-native'])}
              visible={handleSelection('bibliotecas-mobile')}
            />
            <SubCategory
              icon={Framework}
              text='frameworks'
              color='bg-purple-900'
              selected={handleSelection('frameworks-mobile')}
              onclick={() => setCategory(['mobile', 'javascript-mobile', 'bibliotecas-mobile', 'react-native', 'frameworks-mobile'])}
              visible={handleSelection('react-native')}
            />
            <SubCategory
              icon={Expo}
              text='expo'
              color='bg-purple-900'
              selected={handleSelection('expo')}
              onclick={() => setCategory(['mobile', 'javascript-mobile', 'bibliotecas-mobile', 'react-native', 'frameworks-mobile', 'expo'])}
              visible={handleSelection('frameworks-mobile')}
            />
            <SubCategory
              icon={React}
              text='native-base'
              color='bg-purple-900'
              selected={handleSelection('native-base')}
              onclick={() => setCategory(['mobile', 'javascript-mobile', 'bibliotecas-mobile', 'react-native', 'frameworks-mobile', 'native-base'])}
              visible={handleSelection('frameworks-mobile')}
            />
            {/* <div ref={divRef} /> */}
          </div>
          <div></div>
          <div className='flex flex-col gap-10'>
            <Category
              icon={Back}
              text='back-end'
              color='bg-yellow-600'
              selected={handleSelection('back-end')}
              onclick={() => setCategory(['back-end'])}
            />

            <SubCategory
              icon={JS}
              text='Javacript Typescript'
              color='bg-yellow-600'
              selected={handleSelection('javascript-back')}
              onclick={() => setCategory(['back-end', 'javascript-back'])}
              visible={handleSelection('back-end')}
            />
            <SubCategory
              icon={JS}
              text='Frameworks'
              color='bg-yellow-600'
              selected={handleSelection('framework-back')}
              onclick={() => setCategory(['back-end', 'javascript-back', 'framework-back'])}
              visible={handleSelection('javascript-back')}
            />
            <SubCategory
              icon={Node}
              text='nodejs'
              color='bg-yellow-600'
              selected={handleSelection('nodejs')}
              onclick={() => setCategory(['back-end', 'javascript-back', 'framework-back', 'nodejs'])}
              visible={handleSelection('framework-back')}
            />
            <Dialog.Root >
              <Dialog.Trigger>
                <SubCategory
                  icon={Express}
                  text='expressjs'
                  color='bg-yellow-600'
                  selected={handleSelection('expressjs')}
                  onclick={() => setCategory(['back-end', 'javascript-back', 'framework-back', 'expressjs'])}
                  visible={handleSelection('framework-back')}
                />
              </Dialog.Trigger>
              <Dialog.Content>
                <ExpressModal />
              </Dialog.Content>
            </Dialog.Root>

            <SubCategory
              icon={Fastify}
              text='fastify'
              color='bg-yellow-600'
              selected={handleSelection('fastify')}
              onclick={() => setCategory(['back-end', 'javascript-back', 'framework-back', 'fastify'])}
              visible={handleSelection('framework-back')}
            />
            <SubCategory
              icon={Python}
              text='python'
              color='bg-yellow-600'
              selected={handleSelection('python')}
              onclick={() => setCategory(['back-end', 'python'])}
              visible={handleSelection('back-end')}
            />
            <SubCategory
              icon={Framework}
              text='Frameworks'
              color='bg-yellow-600'
              selected={handleSelection('framework-python')}
              onclick={() => setCategory(['back-end', 'python', 'framework-python'])}
              visible={handleSelection('python')}
            />
            <SubCategory
              icon={FLask}
              text='Flask'
              color='bg-yellow-600'
              selected={handleSelection('Flask')}
              onclick={() => setCategory(['back-end', 'python', 'framework-python', 'Flask'])}
              visible={handleSelection('framework-python')}
            />
            <SubCategory
              icon={Fastapi}
              text='fastapi'
              color='bg-yellow-600'
              selected={handleSelection('fastapi')}
              onclick={() => setCategory(['back-end', 'python', 'framework-python', 'fastapi'])}
              visible={handleSelection('framework-python')}
            />
            <SubCategory
              icon={Django}
              text='django'
              color='bg-yellow-600'
              selected={handleSelection('django')}
              onclick={() => setCategory(['back-end', 'python', 'framework-python', 'django'])}
              visible={handleSelection('framework-python')}
            />
            {/* <div ref={divRef} /> */}
          </div>
          <div className='flex flex-col gap-10'>

            <Category
              icon={Devops}
              text='devops'
              color='bg-red-800'
              selected={handleSelection('devops')}
              onclick={() => setCategory(['devops'])}
            />

            <SubCategory
              icon={Linux}
              text='linux'
              color='bg-red-800'
              selected={handleSelection('linux')}
              onclick={() => setCategory(['devops', 'linux',])}
              visible={handleSelection('devops')}
            />
            <SubCategory
              icon={Aws}
              text='aws'
              color='bg-red-800'
              selected={handleSelection('aws')}
              onclick={() => setCategory(['devops', 'aws',])}
              visible={handleSelection('devops')}
            />
            <SubCategory
              icon={Gcp}
              text='gcp'
              color='bg-red-800'
              selected={handleSelection('gcp')}
              onclick={() => setCategory(['devops', 'gcp',])}
              visible={handleSelection('devops')}
            />
            <Dialog.Root >
              <Dialog.Trigger>
                <SubCategory
                  icon={Docker}
                  text='docker'
                  color='bg-red-800'
                  selected={handleSelection('docker')}
                  onclick={() => setCategory(['devops', 'docker',])}
                  visible={handleSelection('devops')}
                />
              </Dialog.Trigger>
              <Dialog.Content>
                <DockerModal />
              </Dialog.Content>
            </Dialog.Root>

          </div>
        </div>

      </div>

    </div>
  )
}
