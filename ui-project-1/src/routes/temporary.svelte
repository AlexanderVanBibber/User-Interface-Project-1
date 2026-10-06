<script>

    import BackAdjuster from '$lib/backAdjuster.svelte';
    import HeatSensor from '$lib/HeatSensor.svelte';
    import Charger from '$lib/charger.svelte';
    import MassageUI from '$lib/massageUI.svelte';
    import RotationDial from '$lib/rotationControl.svelte';
    import RotationIndicator from '$lib/rotationIndicator.svelte';

</script>

<div class="container">

    <!-- LEFT FRONT + LEFT SIDE -->
    <div class="side-column">
        <div class="rectangle left-front">
            <div class="charger">
                <Charger />
            </div>
        </div>
        <div class="rectangle left-side">
            <div class="rotationDial">
                <RotationDial />
            </div>
        </div>
    </div>

    <div class="rectangle left-arm">
        <div class="backAdjuster">
            <BackAdjuster />
        </div>
        <div class="heatSensor">
            <HeatSensor />
        </div>
    </div>

    <div class="rectangle right-arm">
        <div class="massageUI">
            <MassageUI />
        </div>

        <div class="rotationIndicator">
            <RotationIndicator />
        </div>
    </div>

</div>

<div class="rectangle top-bar">

    <a href="/leftarm">Left Arm</a>
    <a href="/leftfront">Left Front</a>
    <a href="/leftside">Left Side</a>
    <a href="/rightarm">Right Arm</a>


</div>

<style>

.rotationDial {

    transform: scale(0.3)
}

.rotationIndicator {

    transform: scale(0.2) translateX(-50vw) translateY(-15vw);
}

.massageUI {

    transform: scale(1.2) translateY(45vh) translateX(4vw);
}

.charger {

    transform: scale(.6) translateX(-34%) translateY(-23%);
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
    aspect-ratio: 1s;
    height: 20vw;

    transform: translateX(25%);
}

.left-side{
    width: 40vw;
    aspect-ratio: 2 / 1;
    height: auto;
}
</style>