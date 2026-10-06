<script>
    import{rotateClockwise, rotateCounterClockwise} from '$lib/scripts.js';
    import{chairAngle} from '$lib/scripts.js';
</script>

<div class="selector">

    <button class="arrow left" onclick={rotateCounterClockwise}>
        ◀
    </button>

    <div class="oval">
        {$chairAngle}
    </div>

    <button class="arrow right" onclick={rotateClockwise}>
        ▶
    </button>

</div>

<style>
    .selector {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .arrow {
        width: 40px;
        height: 40px;

        background: black;
        color: white;

        border: 2px solid white;
        border-radius: 5px;

        font-size: 18px;
        cursor: pointer;
    }

    .arrow:hover {
        color: #00f6ff;
        border-color: #00f6ff;

        text-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px rgba(0, 246, 255, 0.8);
    }

    .arrow:active {
        transform: scale(0.92);
    }

    .oval {
        width: 120px;
        height: 45px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: black;
        color: #00f6ff;

        border: 2px solid white;
        border-radius: 50%;

        font-size: 22px;
        font-weight: bold;
    }
</style>