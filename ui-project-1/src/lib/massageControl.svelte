<script>
    import {
        backMassageOn,
        backMassageLevel,
        seatMassageOn,
        seatMassageLevel,
        toggleBackMassage,
        toggleSeatMassage,
        setBackMassageLevel,
        setSeatMassageLevel
    } from '$lib/scripts';

    let { type } = $props();

    function toggle() {
        if (type === 'back') {
            toggleBackMassage();
        } else {
            toggleSeatMassage();
        }
    }

    function setLevel(level) {
        if (type === 'back') {
            setBackMassageLevel(level);
        } else {
            setSeatMassageLevel(level);
        }
    }

    function isOn() {
        return type === 'back'
            ? $backMassageOn
            : $seatMassageOn;
    }

    function currentLevel() {
        return type === 'back'
            ? $backMassageLevel
            : $seatMassageLevel;
    }
</script>

<button
    class="switch"
    class:on={isOn()}
    onclick={toggle}
>
    <span class="on-label">ON</span>
    <span class="off-label">OFF</span>
    <span class="knob"></span>
</button>

<div class="level-selector">
    {#each [1, 2, 3, 4, 5] as level}
        <button
            class:selected={currentLevel() === level}
            onclick={() => setLevel(level)}
        >
            {level}
        </button>
    {/each}
</div>

<style>
    .switch {
        position: relative;

        transform: translate(2vw);
        
        width: 120px;
        height: 52px;

        padding: 0;

        background: black;
        border: 2px solid white;
        border-radius: 28px;

        cursor: pointer;

        box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.15);

        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
    }

    .switch.on {
        border-color: #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px #00f6ff,
            0 0 25px rgba(0, 246, 255, 0.7);
    }

    .knob {
        position: absolute;

        width: 42px;
        height: 42px;

        top: 3px;
        left: 3px;

        background: white;
        border-radius: 50%;

        box-shadow:
            0 0 5px rgba(255, 255, 255, 0.8);

        transition:
            transform 0.25s ease,
            box-shadow 0.2s ease;
    }

    .switch.on .knob {
        transform: translateX(68px);

        box-shadow:
            0 0 5px white,
            0 0 12px #00f6ff,
            0 0 20px #00f6ff;
    }

    .on-label,
    .off-label {
        position: absolute;

        top: 50%;
        transform: translateY(-50%);

        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;

        pointer-events: none;
    }

    .on-label {
        left: 13px;
        color: white;
    }

    .off-label {
        right: 11px;
        color: white;
    }

    .level-selector {
        display: flex;

        width: 250px;
        height: 52px;

        background: black;

        border: 2px solid white;
        border-radius: 10px;

        overflow: hidden;

        box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.15);
    }

    .level-selector button {
        position: relative;

        flex: 1;

        border: none;
        border-right: 2px solid white;

        background: black;
        color: white;

        font-size: 18px;
        font-weight: 700;

        cursor: pointer;

        transition:
            color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
    }

    .level-selector button:last-child {
        border-right: none;
    }

    .level-selector button:hover {
        color: #00f6ff;

        text-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff;
    }

    .level-selector button.selected {
        background: black;
        color: #00f6ff;

        text-shadow:
            0 0 5px #00f6ff,
            0 0 12px #00f6ff;

        box-shadow:
            inset 0 0 5px #00f6ff,
            inset 0 0 12px rgba(0, 246, 255, 0.8),
            inset 0 0 25px rgba(0, 246, 255, 0.35),

            0 0 5px #00f6ff,
            0 0 12px rgba(0, 246, 255, 0.8);
    }

    .level-selector button.selected::after {
        content: "";

        position: absolute;
        inset: 2px;

        border: 2px solid #00f6ff;
        border-radius: 5px;

        pointer-events: none;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff,
            inset 0 0 5px #00f6ff;
    }

    .level-selector button:active {
        transform: scale(0.96);
    }
</style>


