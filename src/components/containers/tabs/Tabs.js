import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const Tabs = props => {
    const { tabData } = props;
    const [activeTab, setActiveTab] = useState(0);
    const [currentActiveTab, setCurrentActivetab] = useState(0);

    const handleTabButtonClick = (index, isMobileButton = false) => {

        // close the current active tab
        if(isMobileButton && currentActiveTab === index) {
            
            setActiveTab(null);
            setCurrentActivetab(null);

            return;
        } 


        setActiveTab(index);
        setCurrentActivetab(index);

        return;
    }

    return (
        <div className="component-tabs">
            <div className="component-tabs__panel d-none d-sm-none d-lg-block">
                { 
                    tabData &&
                        tabData.map((tab, index) => {
                            
                            const { title } = tab;

                            return (
                                <button 
                                    key={index}
                                    className={`component-tabs__button ${index === activeTab ? 'component-tabs__button--active' : ''}`} 
                                    type="button"
                                    onClick={() => { handleTabButtonClick(index) }}>

                                    {title}

                                </button>
                            );
                        })
                }
            </div>
            <div className="component-tabs__tab-contents">
                {
                    tabData && 

                        tabData.map((tab, index) => {

                            const { content, title } = tab;
                            const sanitizedHTML = DOMPurify.sanitize(content); //sanitize HTML to prevent XSS attacks

                            return (
                                <div key={index} className={`component-tabs__tab ${index === activeTab ? 'component-tabs__tab--active' : ''}  ${index === activeTab ? 'component-tabs__tab--closed' : ''}`}>
                                    
                                    <button 
                                        type="button" 
                                        className={`component-tabs__button component-tabs__button--accordion-button ${index === activeTab ? 'component-tabs__button--active' : ''}`}
                                        onClick={() => { handleTabButtonClick(index, true) }}>
                                            {title}
                                    </button>

                                    <div className="component-tabs__tab-inner" dangerouslySetInnerHTML={{__html: sanitizedHTML}}></div>
                                </div>
                            );

                        })
                }
            </div>
        </div>
    );

};

export default Tabs;