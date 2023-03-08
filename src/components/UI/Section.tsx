import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}


export const SectionTitle = (props:Props) => {
    return (
        <h2 className="text-2xl md:text-3xl font-medium ">{props.children}</h2>
    )
}
export const SectionText = (props:Props) => {
    return (
        <p className="max-w-2xl leading-9 mt-3 text-justify">{props.children}</p>
    )
}

const Section = (props: Props) => {
    return (
        <div className="w-[90%] md:w-[75%] mt-10 mx-auto pt-3 md:pt-5 pb-8">
            {props.children}
      </div>
    );
}

export default Section