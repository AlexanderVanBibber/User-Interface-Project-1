<script>

    import Info from '$lib/infoButton.svelte';

</script>

<div class="rectangle top-bar">

    <a href="/">Home Page</a>
    <a href="/leftarm">Left Arm</a>
    <a href="/leftfront">Left Front</a>
    <a href="/leftside">Left Side</a>
    <a href="/rightarm">Right Arm</a>
    <div class="info">
        <Info />
    </div>

</div>


<style>

    .info {

        transform: scale(0.8);
    }

    .top-bar {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 7vh;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 1vw;

        box-sizing: border-box;
    }

    .rectangle {
        background: rgb(43, 43, 43);

        border: 2px solid white;
        border-radius: 5px;

        box-shadow:
            0 0 5px rgba(255, 255, 255, 0.15),
            inset 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .top-bar a {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 4vh;
        padding: 0 1.2vw;

        background: black;

        border: 2px solid white;
        border-radius: 5px;

        color: white;

        text-decoration: none;

        font-family: "Fredoka", sans-serif;
        font-size: 1rem;
        font-weight: bold;

        transition:
            color 0.2s,
            border-color 0.2s,
            box-shadow 0.2s,
            text-shadow 0.2s,
            transform 0.1s;
    }

    .top-bar a:hover {
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

    .top-bar a:active {
        transform: scale(0.95);
    }

</style>