import { Fade } from 'react-bootstrap';
import About from './About';

// eslint-disable-next-line react/prop-types
const TabContent = ({isSelected}) => {
    return (
        <>
            <div className="w-50 p-3">
                <div className="tab-content">
                    <Fade in={isSelected("0")} className={`${isSelected("0") ? '' : 'tab'}`}>
                        <div>
                            <About />
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
        </>
    )
}

export default TabContent