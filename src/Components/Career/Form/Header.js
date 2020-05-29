import React from 'react';

const Header = ({one, two, three, four}) => {
    return (
        <div className="stepper-horizontal my-5" id="stepper1">
            <div className={`step ${one}`}>
                <div className="step-circle"><span>1</span></div>
                <div className="step-title">Basic</div>
                <div className="step-bar-left"/>
                <div className="step-bar-right"/>
            </div>
            <div className={`step ${two}`}>
                <div className="step-circle"><span>2</span></div>
                <div className="step-title">Personal</div>
                <div className="step-bar-left"/>
                <div className="step-bar-right"/>
            </div>
            <div className={`step ${three}`}>
                <div className="step-circle"><span>3</span></div>
                <div className="step-title">Education</div>
                <div className="step-optional">Mandatory</div>
                <div className="step-bar-left"/>
                <div className="step-bar-right"/>
            </div>
            <div className={`step ${four}`}>
                <div className="step-circle"><span>4</span></div>
                <div className="step-title">Professional</div>
                <div className="step-bar-left"/>
                <div className="step-bar-right"/>
            </div>
        </div>
    );
};

export default Header;
