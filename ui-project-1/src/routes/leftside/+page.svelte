<script>

    import Rotation from '$lib/rotationControl.svelte';
    import TopBar from '$lib/topBar.svelte';
    import Chair from '$lib/chair.svelte';

</script>

<div>

    <div class="rectangle left-side">
    <div class="rotationDial">
        <Rotation />
    </div>

    </div>

     <div class="chair">

        <Chair />

    </div>


</div>



<div class="top-bar">
    <TopBar />
</div>

<style>

    .chair {

        transform: scale(2.5) translateX(45vw) translateY(-10vw);
    }

    .rectangle {

        background: rgb(43, 43, 43);
        border: 2px solid black;
        border-radius: 5px;
    }

    .left-side {
        margin-top: 8vh;
        width: 25vw;
        height: 20vw;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rotationDial {

        transform: translateY(-8vh);
    }

</style>