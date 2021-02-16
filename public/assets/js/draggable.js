$( document ).ready(function() {
    const getResizeableElement = () => { return document.getElementById("text-input-pane"); };
    const getHandleElement = () => { return document.getElementById("handle"); };
    const minPaneSize = 63;
    const maxPaneSize = document.body.clientHeight
    getResizeableElement().style.setProperty('--max-height', `${maxPaneSize}px`);
    getResizeableElement().style.setProperty('--min-height', `${minPaneSize}px`);

    const setPaneHeight = (height) => {
        getResizeableElement().style
            .setProperty('--resizeable-height', `${height}px`);
    };

    const getPaneHeight = () => {
        const pxHeight = getComputedStyle(getResizeableElement())
            .getPropertyValue('--resizeable-height');
        return parseInt(pxHeight, 10);
    };

    // on-click function to our pseudo-element to start our resizing. In our function,
    // we’ll use the cursor position and our starting height to do some setup.
    const startDragging = (event) => {
        event.preventDefault();
        const host = document.getElementById("text-input-pane");
        const startingPaneHeight = getPaneHeight();
        const yOffset = event.pageY;

        // also set up another event listener that listens to all mouse move elements on 
        // the body of the webpage. 
        // This listener only binds after the user clicks our resize handle.
        const mouseDragHandler = (event) => {
            event.preventDefault();
            const primaryButtonPressed = event.buttons === 1;
            if (!primaryButtonPressed) {
                document.body.removeEventListener('pointermove', mouseDragHandler);
                return;
            }

            setPaneHeight(event.pageY - yOffset + startingPaneHeight);

            // export this value from JavaScript, we’ll save our value to a CSS variable
            // A minimum and maximum height prevent the user from mangling the content within 
            // our element. First we’ll leverage the `min-height` and `max-height` CSS properties. 
            // We’re complicating the process a little because we need the JavaScript values later.
            getResizeableElement().style.setProperty('--max-height', `${maxPaneSize}px`);
            getResizeableElement().style.setProperty('--min-height', `${minPaneSize}px`);

            // Without this, the user can pull their cursor past our maximum height and save an 
            // un-useable height. The next time the user tries to drag the pane, it won’t shrink 
            // until the excess height is used. To avoid all of that, 
            // we can constrain the height to our minimum and maximum when the user lets go of 
            // the mouse.
            if (!primaryButtonPressed) {
                setPaneHeight(Math.min(Math.max(getPaneHeight(), minPaneSize), maxPaneSize));
                document.body.removeEventListener('pointermove', mouseDragHandler);
                return;
            }
        }
        // use the body element instead of the element we’re resizing.
        // this avoids choppy movement
        const remove = document.body.addEventListener('pointermove', mouseDragHandler);
    }

    getHandleElement().addEventListener('mousedown', startDragging);
});