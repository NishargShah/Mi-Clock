let UIController = (() => {
    // ALL DATA
    let DOMData = {
        dials: '.dial', dot: '.dot', cutLine: '.cut_line', clock: '',
        minuteLine: '.minute_line', hourLine: '.hour_line', clockLength: 360,
        triangleManager: '.triangle_manager', triangle: '.triangle', shadow: '.shadow',
        container: '.container', roundImage: '.round_img',
    };

    // RETURN OF UIController
    return {
        getDOMData: () => DOMData
    }
})();

let updateController = (ui => {
    //  GET DATA FROM UIController
    const updateDOM = ui.getDOMData();
    let clock, clockLength;
    clockLength = updateDOM.clockLength;

    let writeHtml = () => {
        clock = updateDOM.clock;

        // REPEAT CLOCK DIAL 360 TIMES
        for (let i = 0; i < clockLength; i++) {
            clock +=
            `
                <span class="dial">
                    <div class="cut_line"></div>
                </span>
            `;
        }

        // ADD HTML AFTER LOOP FINISH
        clock +=
        `
            <div class="dot"></div>
            <div class="minute_line"></div>
            <div class="hour_line"></div>
            <div class="triangle_manager">
                <div class="triangle"></div>
                <div class="shadow"></div>
            </div>
        `;

        // INSERT ABOVE HTML INTO CONTAINER CLASS
        document.querySelector(updateDOM.container).innerHTML = clock;
    };

    // MAKE DIALS IN UI
    let makeDials = () => {
        for (let i = 1; i <= clockLength; i++) {
            document.querySelector(`${updateDOM.dials}:nth-child(${i})`).style.transform = `rotate(${(i - 1)}deg)`;
        }
    };

    // FINAL FUNCTION FOR CLOCK
    let clockReady = () => {
        writeHtml();
        makeDials();
    };

    // RETURN OF updateController
    return {
        getClock: () => clockReady()
    }
})(UIController);

let controller = ((ui, update) => {

    // RETURN OF controller
    return {
        init: () => {
            update.getClock();
        }
    }
})(UIController, updateController);

controller.init();
