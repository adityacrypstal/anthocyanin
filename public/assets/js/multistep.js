var currentStep = 1;
var numSteps = 4;

function nextStep() {
    currentStep++;
    if (currentStep > numSteps) {
        currentStep = 1;
    }
    var stepper = document.getElementById('stepper1');
    var steps = stepper.getElementsByClassName('step');

    Array.from(steps).forEach((step, index) => {
        let stepNum = index + 1;
        if (stepNum === currentStep) {
            addClass(step, 'editing');
        } else {
            removeClass(step, 'editing');
        }
        if (stepNum < currentStep) {
            addClass(step, 'done');
        } else {
            removeClass(step, 'done');
        }
    })
}


/* get, set class, see https://ultimatecourses.com/blog/javascript-hasclass-addclass-removeclass-toggleclass */

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
