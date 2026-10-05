<script>
    import{changeAngle, changePosition, selectTrapezoid} from '$lib/scripts.js';
    import {selectedTrapezoid, angles, positions} from '$lib/scripts.js';
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
                {angles[$selectedTrapezoid - 1]}°
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
                {positions[$selectedTrapezoid - 1]} in
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

        transition: transform 0.2s ease;
    }

    .trapezoid::after {
        content: "";
        position: absolute;
        inset: 2px;

        background: white;
    }

    .trapezoid.selected::after {
        background: black;
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


    /* ---------------- */
    /* INDICATORS       */
    /* ---------------- */

    .indicators {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .indicator button {
        width: 40px;
        height: 40px;

        border: 2px solid black;
        background: white;

        cursor: pointer;
        font-size: 20px;
    }

    .value {
        width: 80px;

        text-align: center;

        font-size: 24px;
        font-weight: bold;
    }

</style>