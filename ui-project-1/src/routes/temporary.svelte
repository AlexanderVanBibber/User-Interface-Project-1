<script>

    import BackAdjuster from '$lib/backAdjuster.svelte';
    import HeatSensor from '$lib/HeatSensor.svelte';
    import Charger from '$lib/charger.svelte';

</script>

<div class="container">

    <!-- LEFT FRONT + LEFT SIDE -->
    <div class="side-column">
        <div class="rectangle left-front">
            <div class="charger">
                <Charger />
            </div>
        </div>
        <div class="rectangle left-side"></div>
    </div>

    <!-- LEFT ARM -->
    <div class="rectangle left-arm">
        <div class="backAdjuster">
        <BackAdjuster />
        </div>
        <div class="heatSensor">
            <HeatSensor />
        </div>
    </div>

    <!-- RIGHT ARM -->
    <div class="rectangle right-arm"></div>

</div>

<div class="rectangle top-bar"></div>

<style>

.charger {

    transform: scale(10);
    transform-origin: top left;
}

.heatSensor {

    transform: translateY(-45vh) translateX(2vw);
}

.backAdjuster {

    transform:scale(0.9) translateY(50vh) translateX(1vh);
    transform-origin: top left;
}

.container {
    display: flex;
    align-items: flex-start;
    gap: 2vw;

    margin-top: 10vh;
    margin-left: 1vw;
}

.side-column {
    display: flex;
    flex-direction: column;
    gap: 3vh;
}

.rectangle {
    background: gray;
}

.top-bar {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 7vh;
}

.left-arm,
.right-arm {
    width: 25vw;
    aspect-ratio: 1 / 1.9;
    height: auto;
    position: relative;
}

.left-front{
    width: 20vw;
    aspect-ratio: 1;
    height: 20vw;
}

.left-side{
    width: 30vw;
    aspect-ratio: 2.2 / 2;
    height: auto;
}
</style>