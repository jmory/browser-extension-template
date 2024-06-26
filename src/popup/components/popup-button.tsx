import './popup-button.scss';

import { FunctionComponent } from 'react';

import arrowIcon from '../../assets/images/arrow-icon.svg';

export type PopupButtonProps = {
    label: string;
    onClick: () => void;
};

export const PopupButton: FunctionComponent<PopupButtonProps> = (props) => {
    return (
        <button className='popup-button' onClick={props.onClick}>
            <span className='popup-button__label'>{props.label}</span>
            <img className='popup-button__icon' src={arrowIcon}/>
        </button>
    );
};
