<script>

    import Charger from '$lib/charger.svelte';
    import TopBar from '$lib/topBar.svelte';
    import Chair from '$lib/chair.svelte';

</script>

<div>

    <div class="rectangle left-front">
    <div class="charger">
        <Charger />
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

        transform: scale(2.5) translateX(45vw) translateY(-14vw);
    }

     .rectangle {

        background: rgb(43, 43, 43);
        border: 2px solid black;
        border-radius: 5px;
    }


    .left-front{
        
        margin-top: 8vh;
        width: 30vw;
        height: 30vw;

    }

    .charger {

        transform: scale(0.9) translateX(-2vw) translateY(2.5vw);
    }

</style>