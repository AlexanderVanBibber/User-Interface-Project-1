<script>

import BackAdjuster from '$lib/backAdjuster.svelte';
import HeatSensor from '$lib/HeatSensor.svelte';
import TopBar from '$lib/topBar.svelte';
import Chair from '$lib/chair.svelte';

</script>

<div>

    <div class="rectangle left-arm">
    <div class="backAdjuster">
        <BackAdjuster />
    </div>
    <div class="heatSensor">
        <HeatSensor />
    </div>
    </div>

    <div class="chair">
        <Chair />
    </div>


</div>


<div class="rectangle top-bar">
    <TopBar />
</div>

<style>

    .chair {

        transform: scale(2.5) translateX(45vw) translateY(-20vw);
    }

    .rectangle {

        background: rgb(43, 43, 43);
        border: 2px solid black;
        border-radius: 5px;
    }

    .heatSensor {

        transform: translateY(-45vh) translateX(2vw);
    }

    .backAdjuster {

        transform:scale(0.9) translateY(50vh) translateX(1vh);
        transform-origin: top left;
    }

    .left-arm {

        width: 25vw;
        aspect-ratio: 1 / 1.8;
        height: auto;
        position: relative;
        margin-right: auto;
        margin-top: 8vh;
    }

    
</style>