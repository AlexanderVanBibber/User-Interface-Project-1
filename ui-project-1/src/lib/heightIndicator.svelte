<script>

    import{moveUp, moveDown} from '$lib/scripts.js';
    import{chairHeight} from '$lib/scripts.js';

</script>

<div class="indicator">

    <button onclick={moveUp}>▲</button>

    <div class="value">
        {$chairHeight}
    </div>

    <button onclick={moveDown}>▼</button>

    

</div>

<style>
    .value {

        font-family: "Fredoka", sans-serif;
        color: white;
    }

    .indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .value {
        width: 100px;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 2px solid black;
        font-size: 32px;
    }

    button {
        width: 100px;
        height: 35px;

        border: 2px solid white;
        background: black;
        color: rgb(73, 205, 249);
        cursor: pointer;
        font-size: 18px;
    }

    button:hover {
        background: black;
        color: white;
    }
</style>