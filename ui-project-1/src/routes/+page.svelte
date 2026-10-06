<script>

    import TopBar from '$lib/topBar.svelte';
    import Chair from '$lib/chair.svelte';


</script>

<div class="topBar">

    <TopBar />

</div>

<div class="background">

    <section class="intro">
        <h1>SMART CHAIR</h1>

        <h2>Alex VanBibber</h2>

        <a
            class="github"
            href="https://github.com/AlexanderVanBibber/User-Interface-Project-1"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub Repository
        </a>

        <p>
            This webpage is my UI for a smart chair. The goal was to create a
            chair that fits the needs of real people interviewed for this
            project.
        </p>

        <p class="instruction">
            Navigate using the top bar or select different parts of the chair
            itself.
        </p>
    </section>

    <div class="chair">
        <Chair />
    </div>

</div>

<style>

    .background {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 20vh;
        width: 50%;
        height: 60vh;

        background: black;
        color: white;

        font-family: "Fredoka", sans-serif;

        border-radius: 3%;
    }

    .intro {
        width: 70%;
        max-width: 800px;

        margin-top: 5vh;
        padding: 2rem;

        background: rgb(20, 20, 20);
        border: 2px solid white;
        border-radius: 8px;

        text-align: center;

        box-shadow:
            0 0 5px rgba(255, 255, 255, 0.2),
            inset 0 0 15px rgba(0, 0, 0, 0.8);
    }

    h1 {
        margin: 0 0 0.5rem;

        font-size: 3rem;
        letter-spacing: 0.15em;

        color: white;

    }

    h2 {
        margin: 0.5rem 0;

        font-size: 1.3rem;
        color: white;

    }

    p {
        max-width: 650px;
        margin: 1.5rem auto 0;

        line-height: 1.6;
        font-size: 1.05rem;

        color: white;
    }

    .instruction {
        margin-top: 1rem;

        color: #00f6ff;

    }

    .github {
        display: inline-block;

        margin-top: 1rem;
        padding: 0.6rem 1.2rem;

        background: black;
        border: 2px solid white;
        border-radius: 5px;

        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;

        transition:
            color 0.2s,
            border-color 0.2s,
            box-shadow 0.2s,
            text-shadow 0.2s,
            transform 0.1s;
    }

    .github:hover {
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

    .github:active {
        transform: scale(0.95);
    }

    .chair {
        margin-top: 5vh;

        transform:
            scale(2)
            translateX(25vw)
            translateY(-17vw);
    }

</style>