import Image, { StaticImageData } from 'next/image'



interface IProps {
    icon: StaticImageData
    text: string
    color: string
    selected: boolean
    onclick: () => void
    visible: boolean
}

export default function SubCategory(props: IProps) {
    return (
        <div
            className={`${props.color} px-8 py-4 flex items-center justify-between rounded-2xl gap-4 min-w-[250px] ${props.selected ? 'border-white border-4' : ''} cursor-pointer shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  h-28 w-[300px] 
            ${!props.visible ? 'hidden' : ''}
            `}
            onClick={props.onclick}
        >
            <div className='h-20 w-20 rounded-2xl overflow-hidden'>
                <Image
                    src={props.icon || null}
                    alt='icon'
                />
            </div>
            <h1 className='font-bold text-xl text-gray-200 max-w-[150px]'>{props.text.toUpperCase()}</h1>
        </div>
    )
}
