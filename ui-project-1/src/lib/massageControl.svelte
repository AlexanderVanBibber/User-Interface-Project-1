<script>
    let isOn = $state(false);
    let selectedLevel = $state(1);

</script>

<button
    class="switch"
    class:on={isOn}
    onclick={() => isOn = !isOn}
>
    <span class="on-label">ON</span>
    <span class="off-label">OFF</span>
    <span class="knob"></span>
</button>

<div class="level-selector">
    {#each [1, 2, 3, 4, 5] as level}
        <button
            class:selected={selectedLevel === level}
            onclick={() => selectedLevel = level}
        >
            {level}
        </button>
    {/each}
</div>

<style>
    .switch {
        position: relative;
        width: 120px;
        height: 50px;

        border: 2px solid black;
        border-radius: 25px;
        background: white;

        padding: 0;
        cursor: pointer;
    }

    .knob {
        position: absolute;
        width: 42px;
        height: 42px;

        top: 2px;
        left: 2px;

        background: black;
        border-radius: 50%;

        transition: transform 0.2s ease;
    }

    /* Move the knob when ON */
    .switch.on .knob {
        transform: translateX(70px);
    }

    .on-label,
    .off-label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        font-weight: bold;
        pointer-events: none;
    }

    .on-label {
        left: 12px;
    }

    .off-label {
        right: 10px;
    }

    .level-selector {
    display: flex;
    width: 250px;
    height: 50px;
    }

    .level-selector button {
        flex: 1;
        border: 1px solid black;
        background: white;
        font-size: 20px;
        cursor: pointer;
    }

    .level-selector button.selected {
        background: black;
        color: white;
    }

</style>


