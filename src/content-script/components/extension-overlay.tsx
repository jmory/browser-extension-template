import './extension-overlay.scss';

import { FunctionComponent, PropsWithChildren } from 'react';

import extensionLogo from '../../assets/images/extension-logo.png';

export type WelcomeOverlayProps = PropsWithChildren<{
    onClose: () => void;
}>;

export const ExtensionOverlay: FunctionComponent<WelcomeOverlayProps> = (props) => {
    return (
        <div className='extension-overlay'>
            <div className='extension-overlay__header'>
                <img className='extension-overlay__extension-logo' src={extensionLogo}></img>
                <button className='extension-overlay__close-icon' onClick={props.onClose}></button>
            </div>
            <div className='extension-overlay__body'>
                {props.children}
            </div>
        </div>
    );
};
