import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { debounce } from '../../../utilities';

const Tabs = props => {
    const { tabData } = props;
    const [activeTab, setActiveTab] = useState(0);
    const [currentActiveTab, setCurrentActivetab] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let mobileBreakpoint = 991;

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

    const handleResize = debounce((activeTab, currentActiveTab) => {

        const { innerWidth } = window;
        const isDesktopView = innerWidth >= mobileBreakpoint;
        const hasNoActiveTab = activeTab == null && currentActiveTab == null;

        // open the first tab if there's no active tab on resize from mobile to desktop
        if(isDesktopView && hasNoActiveTab) {

            setActiveTab(0);
            setCurrentActivetab(0);

        }

       setWindowWidth(innerWidth);
        
    }, 100);

    useEffect(() => {

        window.addEventListener('resize', () => { handleResize(activeTab, currentActiveTab) });

        
        // Clean up the event listener when the component unmounts
        return () => {

            window.removeEventListener('resize', () => { handleResize(activeTab, currentActiveTab) });

        };

    }, [windowWidth]);

    return (
        <div className="component-tabs" data-aos="fade-up">
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