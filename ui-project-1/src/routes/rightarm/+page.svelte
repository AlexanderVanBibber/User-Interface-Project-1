<script>

    import MassageUI from '$lib/massageUI.svelte';
    import RotationIndicator from '$lib/rotationIndicator.svelte';
    import HeightIndicator from '$lib/heightIndicator.svelte';
    import TopBar from '$lib/topBar.svelte';
    import Chair from '$lib/chair.svelte';


</script>

<div class="container">

    <div class="rectangle right-arm">
    <div class="massageUI">
        <MassageUI />
    </div>

    <div class="rotationIndicator">
        <RotationIndicator />
    </div>

    <div class="heightIndicator">
        <HeightIndicator />
    </div>

    <div class="chair">

    <Chair />

    </div>

    </div>
</div>



<div class="rectangle top-bar">

    <TopBar />

</div>


<style>

    .chair {

        transform: scale(2.5) translateX(-17vw) translateY(-12vw);
    }

    .rectangle {

        background: rgb(43, 43, 43);
        border: 2px solid black;
        border-radius: 5px;
    }

    .massageUI {

        transform: scale(1.2) translateY(40vh) translateX(4vw);
    }

    .right-arm {
        width: 25vw;
        aspect-ratio: 1 / 1.8;
        height: auto;
        position: relative;
        margin-left: auto;
        margin-top: 8vh;
    }

    .rotationIndicator {

        transform: scale(0.2) translateX(-41vw) translateY(-70vw);
    }

    .heightIndicator {

        transform: translateX(6vw) translateY(-15vw);
    }
</style>