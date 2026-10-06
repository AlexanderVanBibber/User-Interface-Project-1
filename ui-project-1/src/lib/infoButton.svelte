<a class="info-button" href="/info" aria-label="Information">
    <span>i</span>
</a>

<style>
    .info-button {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0;

        background: black;
        border: 2px solid white;
        border-radius: 50%;

        color: white;

        font-family: "Fredoka", sans-serif;
        font-size: 30px;
        font-weight: bold;

        cursor: pointer;

        transition:
            color 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            text-shadow 0.2s ease,
            transform 0.1s ease;
    }

    .info-button:hover {
        color: #00f6ff;
        border-color: #00f6ff;

        text-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px #00f6ff,
            0 0 25px rgba(0, 246, 255, 0.7),
            inset 0 0 8px rgba(0, 246, 255, 0.35);
    }

    .info-button:active {
        transform: scale(0.9);
    }
</style>