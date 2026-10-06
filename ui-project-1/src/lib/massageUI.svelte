<script>
    import Control from './massageControl.svelte';
</script>

<div class="controls">

    <div class="row1">
        <span class="label">BACK:</span>
        <Control type="back" />
    </div>

    <div class="row2">
        <span class="label">SEAT:</span>
        <Control type="seat" />
    </div>

</div>

<style>
    .controls {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .label {
        font-size: 30px;
        font-weight: bold;
        position: relative;
        top: -15px;
        font-family: "Fredoka", sans-serif;
        color: white;
    }
</style>