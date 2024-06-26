import './popup.scss';

import { FunctionComponent, PropsWithChildren } from 'react';

export type PopupProps = PropsWithChildren<{
    title: string;
}>;

export const Popup: FunctionComponent<PopupProps> = (props) => {
    return (
        <div className='popup'>
            <h1 className="popup__title">{props.title}</h1>
            <div className="popup__buttons">
                {props.children}
            </div>
        </div>
    );
};
