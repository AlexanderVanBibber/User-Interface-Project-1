<script>
    import { increaseTemp, decreaseTemp, getHeatColor } from '$lib/scripts';
    import { temperature } from '$lib/scripts';
</script>

<div class="heatSensor">

    <div class="heat-controls">

        <button class="temp-button" onclick={increaseTemp}>+</button>

        <span class="tempIndicator">{$temperature}°F</span>

        <button class="temp-button" onclick={decreaseTemp}>−</button>

    </div>

    <div class="bars">
        {#each [100, 90, 80, 70, 60, 50, 40] as level}
            <div
                class="bar"
                style:background-color={getHeatColor($temperature, level)}
            ></div>
        {/each}
    </div>

</div>

<style>
    .heatSensor {
        display: flex;
        align-items: center;
        gap: 2vw;
    }

    /* Temperature controls */
    .heat-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1vh;
    }

    .temp-button {
        width: 5vw;
        height: 5vw;

        background: black;
        color: white;

        border: 2px solid white;
        border-radius: 0.5vw;

        font-size: 1.5rem;
        font-weight: bold;

        cursor: pointer;

        transition:
            color 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            text-shadow 0.2s ease,
            transform 0.1s ease;
    }

    /* Hover neon effect */
    .temp-button:hover {
        color: #00f6ff;
        border-color: #00f6ff;

        text-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px rgba(0, 246, 255, 0.8),
            inset 0 0 8px rgba(0, 246, 255, 0.35);
    }

    .temp-button:active {
        transform: scale(0.94);
    }

    /* Temperature display */
    .tempIndicator {
        min-width: 5vw;

        padding: 0.4vw 0.6vw;

        color: white;
        background: black;

        border: 2px solid white;
        border-radius: 0.5vw;

        font-size: 1.2rem;
        font-weight: bold;
        white-space: nowrap;
        text-align: center;

        font-family: "Fredoka", sans-serif;

    }

    /* Heat bars */
    .bars {
        width: 200px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-top: 10px;

        border-radius: 5px;
    }

    .bar {
        height: 20px;
        width: 100%;

        background-color: black;
        border-radius: 5px;

        transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease;
    }
</style>