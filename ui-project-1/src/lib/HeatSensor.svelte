<script>
    import{increaseTemp, decreaseTemp, getHeatColor} from '$lib/scripts';
    import{temperature} from '$lib/scripts';

</script>

<div class = "heatSensor"> <!--Display the temperature and heat bars-->

    <div class="heat-controls">

        <button class="increaseTemp" onclick={increaseTemp}>+</button>

        <span class="tempIndicator">{$temperature}°F</span>

        <button class="decreaseTemp" onclick={decreaseTemp}>−</button>

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
    .bars {
        width: 200px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px
    }

    .bar {
        height: 20px;
        width: 100%;
        background-color: black;
        border-radius: 5px;
    }

    .heatSensor {
        display: flex;
        align-items: center;
        gap: 2vw;   
    }

    .heat-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1vh;
    }

    .heat-controls button {
        width: 5vw;
        height: 5vw;

        border: none;
        border-radius: 0.5vw;

        font-size: 1.5rem;
        cursor: pointer;
    }

    .tempIndicator {
        font-size: 1.2rem;
        font-weight: bold;
        white-space: nowrap;
    }   
</style>