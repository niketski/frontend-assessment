import React from 'react';
import tabData from '../../../../data.json';

// reused  components
import Tabs from '../../containers/tabs/Tabs';

const Exercise2 = () => {
    return (
        <div className="page-exercise-2">
            <section className="page-exercise-2__main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Tabs tabData={tabData}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exercise2;