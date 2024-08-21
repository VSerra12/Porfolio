import { menuItems } from "../constants/menuItems"
import chevronLeft from '../assets/img/chevron-left.svg'


// eslint-disable-next-line react/prop-types
const Tabs = ({isSelected, selectedTab, selected}) => {

    return (
        <>
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
            
        </>
    )
}

export default Tabs