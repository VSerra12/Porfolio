import linkedInLogo from '../assets/img/linkedin.svg'
import gitHubLogo from '../assets/img/github.svg'
import emailLogo from '../assets/img/envelope-at.svg'
import CopyToClipboard from 'react-copy-to-clipboard';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useRef, useState } from 'react';


const SocialMedia = () => {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={linkedInLogo} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img>
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={gitHubLogo} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img>
                        </a>
                        <CopyToClipboard text='vicky.serra.24@gmail.com' ref={target} onClick={() => setShow(!show)}>
                            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-bottom">Copy Email</Tooltip>}>
                                <img src={emailLogo} alt="Logo" className="d-inline-block align-text-top shadow-svg email"></img>
                            </OverlayTrigger>
                            {/* <Overlay target={target.current} show={show} placement="bottom">
                                {(props) => (
                                    <Tooltip id="overlay-example" {...props}>
                                        Copied!
                                    </Tooltip>
                                )}
                            </Overlay> */}
                        </CopyToClipboard>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default SocialMedia