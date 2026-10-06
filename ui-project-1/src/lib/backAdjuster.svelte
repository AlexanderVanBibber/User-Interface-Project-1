<script>
    import { changeAngle, changePosition, selectTrapezoid } from '$lib/scripts.js';
    import { selectedTrapezoid, angles, positions } from '$lib/scripts.js';
</script>


<div class="main">

    <!-- TRAPEZOIDS -->
    <div class="trapezoids">

        <button
            class="trapezoid top"
            class:selected={$selectedTrapezoid === 1}
            onclick={() => selectTrapezoid(1)}
        ></button>

        <button
            class="trapezoid second"
            class:selected={$selectedTrapezoid === 2}
            onclick={() => selectTrapezoid(2)}
        ></button>

        <button
            class="trapezoid third"
            class:selected={$selectedTrapezoid === 3}
            onclick={() => selectTrapezoid(3)}
        ></button>

        <button
            class="trapezoid bottom"
            class:selected={$selectedTrapezoid === 4}
            onclick={() => selectTrapezoid(4)}
        ></button>

    </div>


    <!-- INDICATORS -->
    <div class="indicators">

        <!-- ANGLE -->
        <div class="indicator">

            <button onclick={() => changeAngle(1)}>
                ▲
            </button>

            <div class="value">
                {$angles[$selectedTrapezoid - 1]}°
            </div>

            <button onclick={() => changeAngle(-1)}>
                ▼
            </button>

        </div>


        <!-- POSITION -->
        <div class="indicator">

            <button onclick={() => changePosition(1)}>
                ▲
            </button>

            <div class="value">
                {$positions[$selectedTrapezoid - 1]} in
            </div>

            <button onclick={() => changePosition(-1)}>
                ▼
            </button>

        </div>

    </div>

</div>


<style>

    .main {
        display: flex;
        gap: 40px;
        align-items: center;
    }

    .trapezoids {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .trapezoid {
        position: relative;

        width: 300px;
        height: 80px;

        background: black;

        border: none;
        padding: 0;

        cursor: pointer;

        transition:
            box-shadow 0.2s ease,
            filter 0.2s ease,
            transform 0.1s ease;
    }


    /* White interior */
    .trapezoid::after {
        content: "";
        position: absolute;
        inset: 2px;

        background: white;
    }


    /* Selected trapezoid */
    .trapezoid.selected {
        background: #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px #00f6ff,
            0 0 25px rgba(0, 246, 255, 0.7);
    }

    .trapezoid.selected::after {
        background: black;

        box-shadow:
            inset 0 0 5px #00f6ff,
            inset 0 0 12px rgba(0, 246, 255, 0.8),
            inset 0 0 25px rgba(0, 246, 255, 0.35);
    }


    /* Hover */
    .trapezoid:hover {
        background: #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px rgba(0, 246, 255, 0.8);
    }

    .trapezoid:hover::after {
        background: black;
    }


    /* Press */
    .trapezoid:active {
        transform: scale(0.98);
    }


    .top {
        clip-path: polygon(
            10% 0%,
            90% 0%,
            100% 100%,
            0% 100%
        );
    }

    .top::after {
        clip-path: polygon(
            10% 0%,
            90% 0%,
            100% 100%,
            0% 100%
        );
    }


    .second {
        clip-path: polygon(
            0% 0%,
            100% 0%,
            97.5% 100%,
            2.5% 100%
        );
    }

    .second::after {
        clip-path: polygon(
            0% 0%,
            100% 0%,
            97.5% 100%,
            2.5% 100%
        );
    }


    .third {
        clip-path: polygon(
            2.9% 0%,
            97.1% 0%,
            93% 100%,
            7% 100%
        );
    }

    .third::after {
        clip-path: polygon(
            2.9% 0%,
            97.1% 0%,
            93% 100%,
            7% 100%
        );
    }


    .bottom {
        clip-path: polygon(
            7.2% 0%,
            92.8% 0%,
            90% 100%,
            10.2% 100%
        );
    }

    .bottom::after {
        clip-path: polygon(
            7.2% 0%,
            92.8% 0%,
            90% 100%,
            10.2% 100%
        );
    }

    .indicators {
        display: flex;
        flex-direction: column;
        gap: 40px;

        transform: translateX(-1vw);
    }

    .indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }


    /* Up / down buttons */
    .indicator button {
        width: 40px;
        height: 40px;

        border: 2px solid white;
        background: black;
        color: white;

        cursor: pointer;

        font-size: 20px;
        font-weight: bold;

        transition:
            color 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            text-shadow 0.2s ease,
            transform 0.1s ease;
    }

    .indicator button:hover {
        color: #00f6ff;
        border-color: #00f6ff;

        text-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px rgba(0, 246, 255, 0.8),
            inset 0 0 8px rgba(0, 246, 255, 0.35);
    }

    .indicator button:active {
        transform: scale(0.92);
    }


    /* Numerical values */
    .value {
        width: 80px;

        padding: 4px 0;

        text-align: center;

        font-size: 24px;
        font-weight: bold;

        color: white;

        background: black;

        border: 2px solid white;
        border-radius: 5px;

        font-family: "Fredoka", sans-serif;

    }

</style>