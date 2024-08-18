

import chevronLeft from '../assets/chevron-left.svg'
import { useState } from 'react';
import { Fade } from 'react-bootstrap';
import { menuItems } from '../constants/menuItems';
import SocialMedia from './SocialMedia';


const Portfolio = () => {

    const [selected, setSelected] = useState("0")

    const selectedTab = e => {
        e.preventDefault()


        setSelected(e.target.id)
    }

    const isSelected = (num) => {
        return selected === num
    }
    return (
        <>

            <SocialMedia />
            <main>

                <div className='container'>
                    <div className="w-50 p-3 title-menu">
                        <h1>VICTORIA SERRA</h1>
                        <h2>Front-end Developer</h2>
                        <div className="tabs">
                            <div className='tab-border'>
                                <div className="tab-header">
                                    {
                                        menuItems.map((item, idx) => (
                                            <div id={idx} key={idx} className={`${isSelected('' + idx + '') ? 'active' : ''}`} onClick={selectedTab}>
                                                {item.name}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="tab-indicator" style={{ marginTop: `calc(50px + ${selected * 50}px)` }}><img src={chevronLeft} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="tab-content">
                            <Fade in={isSelected("0")} className={`${isSelected("0") ? '' : 'tab'}`}>
                                <div>
                                    <h2>This is code section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                            <Fade in={isSelected("1")} className={`${isSelected("1") ? '' : 'tab'}`}>
                                <div>
                                    <h2>This is about section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                            <Fade in={isSelected("2")} className={`${isSelected("2") ? '' : 'tab'}`}>
                                <div>
                                    <h2>This is services section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                            <Fade in={isSelected("3")} className={`${isSelected("3") ? '' : 'tab'}`}>
                                <div>
                                    <h2>This is contact section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Portfolio