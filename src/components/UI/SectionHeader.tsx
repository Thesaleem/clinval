import { ReactNode } from 'react';
import './SectionHeader.css'

interface Props {
    children: ReactNode
}

const SectionHeader = (props: Props) => {
    return (
        <div className="wrapper min-h-[30vh] relative py-16">
            <div className="w-[90%] md:w-[75%] mx-auto text-white border border-[red]">
                {props.children}
            </div>
            <div className="hidden xl:static">
                <div className="top-circle"></div>
            </div>
      </div>
    );
}

export default SectionHeader