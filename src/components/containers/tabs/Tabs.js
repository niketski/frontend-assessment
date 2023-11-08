import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const Tabs = props => {
    const { tabData } = props;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="component-tabs">
            <div className="component-tabs__panel">
                { 
                    tabData &&
                        tabData.map((tab, index) => {
                            
                            const { title } = tab;

                            return (
                                <button 
                                    key={index}
                                    className={`component-tabs__button ${index === activeTab ? 'component-tabs__button--active' : ''}`} 
                                    type="button"
                                    onClick={ () => { setActiveTab(index) } }>

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

                            const { content } = tab;
                            const sanitizedHTML = DOMPurify.sanitize(content);

                            return (
                                <div key={index} className={`component-tabs__tab ${index === activeTab ? 'component-tabs__tab--active' : ''}`}>
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