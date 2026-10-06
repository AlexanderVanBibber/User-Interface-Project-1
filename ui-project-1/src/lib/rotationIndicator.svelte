<script>

    import{chairAngle, turnDirection} from '$lib/scripts.js';

</script>


<div class = "rectangle angle-display">

    <div class:flipped={!turnDirection}
         class = "direction-arrow">

        <div class = "angle-indicator"> {$chairAngle}°</div>

        <svg viewBox="0 0 100 100">
            <path
                d = "M 50 8 A 42 42 0 1 1 15 25"
                fill = "none"
                stroke = "lightblue"
                stroke-width = "4"
                stroke-linecap = "round"
            />

            <polygon
                points = "35, 8 50, 1 50, 15"
                fill = "lightblue"
            />

        </svg>
    </div>

</div>



<style>

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

        font-size: 10rem;
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