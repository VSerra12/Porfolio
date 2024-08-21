import { useState } from 'react';
import SocialMedia from './SocialMedia';
import Tabs from './Tabs';
import TabContent from './TabContent';


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
                        <Tabs
                            isSelected={isSelected}
                            selectedTab={selectedTab}
                            selected={selected} />
                    </div>
                    <TabContent
                        isSelected={isSelected}/>
                </div>
            </main>

        </>
    )
}

export default Portfolio