<script>

    import{rotateClockwise, rotateCounterClockwise} from '$lib/scripts.js';
    import{chairAngle, turnDirection} from '$lib/scripts.js';

</script>

<div class = "rectangle left-side">

    <div class = "circle rotate-dial">

        <button class = "rotate-clockwise" onclick={rotateClockwise}>

            <svg viewBox="0 0 100 100">
                <path
                    d="M 25 50 A 25 25 0 0 1 50 22"
                    fill="none"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                />

                <polygon
                    points="25,60 20,50 30,50"
                    fill="black"
                />
            </svg>
        </button>

        <button class = "rotate-counterclockwise" onclick={rotateCounterClockwise}>

            <svg viewBox="0 0 100 100">
                <path
                    d="M 25 50 A 25 25 0 0 1 50 22"
                    fill="none"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                />

                <polygon
                    points="25,60 20,50 30,50"
                    fill="black"
                />
            </svg>
        </button>

    </div>


</div>

<div class = "rectangle angle-display">

    <div class:flipped={!turnDirection}
         class = "direction-arrow">

        <div class = "angle-indicator"> {$chairAngle}°</div>

        <svg viewBox="0 0 100 100">
            <path
                d = "M 50 8 A 42 42 0 1 1 15 25"
                fill = "none"
                stroke = "black"
                stroke-width = "4"
                stroke-linecap = "round"
            />

            <polygon
                points = "35, 8 50, 1 50, 15"
                fill = "black"
            />

        </svg>
    </div>

</div>

<div class = "height-indicator"></div>



<style>

    .rotate-dial {

        width: 50%;
        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);
    }

    .circle {

        border-radius: 50%;
        aspect-ratio: 1;
        background: blue;
    }

    .rotate-clockwise {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;

        position:absolute;
        right:-55%;
        top: -40%;
    }

    .rotate-clockwise:hover {
        transform: scale(1.1);
    }

    .rotate-counterclockwise:hover {
        transform: scale(1.1);
    }

    .rotate-counterclockwise {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;

        position:absolute;
        left:-55%;
        top: -40%;
    }

    .rotate-clockwise svg{

        width: 100%;
        height: 100%;
        transform: scaleX(-1);

    }

    .rotate-counterclockwise svg{

        width: 100%;
        height: 100%;
        display:block;

    }

    .rectangle {
        background: gray;
    }

    .left-side {

        position: relative;
        width: 50vw;
        aspect-ratio: 1.2 / 1;
    }

    .angle-display {
        margin-top: 10vh;
        position: absolute;
        width: 55vw;
        height: 55vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .angle-indicator {

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        font-size: 5rem;
        font-weight: bold;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
    }

    .direction-arrow svg {

        width: 100%;
        height: 100%;
        transform: scaleX(-1) rotate(-120deg);
    }

    .direction-arrow {

        position: absolute;
        width: 100%;
        aspect-ratio: 1;

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }

    .direction-arrow.flipped svg{

        transform: rotate(-120deg);

    }

</style>