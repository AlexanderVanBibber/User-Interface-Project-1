<script>
    import ChairBase from '$lib/chairBase.svelte';
    import ChairSeat from '$lib/chairSeat.svelte';
    import ChairBack from '$lib/chairBack.svelte';

</script>

<div class="chair">

    <div class="section base">
        <ChairBase />
    </div>

    <div class="section seat">
        <ChairSeat />
    </div>

    <div class="section back">
        <ChairBack />
    </div>

</div>

<style>
    .chair {
        position: relative;

        width: 300px;
        height: 400px;
    }

    .section {
        position: absolute;

        width: 100%;
        height: 100%;

        top: 0;
        left: 0;
    }

    .base {
        z-index: 1;
        pointer-events: none;
    }

    .seat {
        z-index: 2;
    }

    .back {
        z-index: 3;
        pointer-events: none;
    }
</style>