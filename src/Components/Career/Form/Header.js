import React from 'react';

const Header = ({one, two, three, four}) => {
    return (
        <div className="stepper-horizontal" id="stepper1">
            <div className={`step ${one}`}>
                <div className="step-circle"><span>1</span></div>
                <div className="step-title">Basic Info</div>
                <div className="step-bar-left"></div>
                <div className="step-bar-right"></div>
            </div>
            <div className={`step ${two}`}>
                <div className="step-circle"><span>2</span></div>
                <div className="step-title">Address</div>
                <div className="step-bar-left"></div>
                <div className="step-bar-right"></div>
            </div>
            <div className={`step ${three}`}>
                <div className="step-circle"><span>3</span></div>
                <div className="step-title">Contacts</div>
                <div className="step-optional">Optional</div>
                <div className="step-bar-left"></div>
                <div className="step-bar-right"></div>
            </div>
            <div className={`step ${four}`}>
                <div className="step-circle"><span>4</span></div>
                <div className="step-title">Reporting Info</div>
                <div className="step-optional">Optional</div>
                <div className="step-bar-left"></div>
                <div className="step-bar-right"></div>
            </div>
        </div>
    );
};

export default Header;
