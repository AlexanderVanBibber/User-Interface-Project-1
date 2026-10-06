<script>

    import TopBar from '$lib/topBar.svelte';

</script>

<div class="topbar">

    <TopBar />

</div>

<div class="info-page">

    <header class="page-header">
        <h1>INFORMATION</h1>
    </header>


    <section class="info-section">

        <div class="section-title">
            <span class="indicator"></span>
            <h2>LEFT ARM</h2>
        </div>

        <div class="info-card">
            <h3>Temperature Control</h3>
            <p>
                Adjusts the chair temperature from 40–60 degrees.
                If I had more time, this change would also be reflected
                on the chair SVG. For now, the temperature change is
                shown directly on the control.
            </p>
        </div>

        <div class="info-card">
            <h3>Back Adjustment Control</h3>
            <p>
                Allows the user to push, pull, and rotate the individual
                back panels. The controls function independently,
                although the changes are not currently reflected on
                the chair SVG.
            </p>
        </div>

    </section>


    <section class="info-section">

        <div class="section-title">
            <span class="indicator"></span>
            <h2>LEFT FRONT</h2>
        </div>

        <div class="info-card">
            <h3>Device Charging</h3>
            <p>
                Four USB-C ports allow the user to charge their devices.
                Click on a port to activate it and watch the corresponding
                charge indicator fill up.
            </p>
        </div>

    </section>


    <section class="info-section">

        <div class="section-title">
            <span class="indicator"></span>
            <h2>LEFT SIDE</h2>
        </div>

        <div class="info-card">
            <h3>Chair Rotation Control</h3>
            <p>
                Controls the rotational angle of the chair. While the
                rotation is not currently reflected on the chair SVG,
                the change in angle is displayed here and on the
                right armrest angle indicator.
            </p>
        </div>

    </section>


    <section class="info-section">

        <div class="section-title">
            <span class="indicator"></span>
            <h2>RIGHT ARM</h2>
        </div>

        <div class="info-card">
            <h3>Chair Angle Indicator</h3>
            <p>
                Displays the chair's current facing angle. Control
                over the angle is located on the left side of the chair.
            </p>
        </div>

        <div class="info-card">
            <h3>Chair Height Control</h3>
            <p>
                Displays the current chair height and allows the user
                to adjust it. The chair SVG updates to reflect changes
                in height.
            </p>
        </div>

        <div class="info-card">
            <h3>Massage Control</h3>
            <p>
                Allows the user to activate a back massage and/or seat
                massage and adjust the strength of each. The corresponding
                chair sections become progressively darker orange as
                the massage strength increases.
            </p>
        </div>

    </section>

</div>


<style>

    .info-page {
        margin-top: 8vh;
        min-height: 100vh;

        padding: 10vh 8vw 8vh;

        background: black;
        color: white;

        font-family: "Fredoka", sans-serif;

        box-sizing: border-box;
    }


    /* PAGE HEADER */

    .page-header {
        text-align: center;

        margin-bottom: 7vh;
    }

    .page-header h1 {
        margin: 0;

        font-size: clamp(2.5rem, 5vw, 4rem);
        letter-spacing: 0.15em;

        color: #00f6ff;

    }

    .page-header p {
        margin-top: 0.75rem;

        font-size: 1rem;
        letter-spacing: 0.25em;

        color: white;

        text-shadow:
            0 0 5px rgba(255, 255, 255, 0.5);
    }


    /* SECTION */

    .info-section {
        width: min(900px, 100%);

        margin: 0 auto 5rem;
    }


    .section-title {
        display: flex;
        align-items: center;

        gap: 1rem;

        margin-bottom: 1.5rem;

        border-bottom: 2px solid white;

        padding-bottom: 0.75rem;
    }

    .section-title h2 {
        margin: 0;

        font-size: 1.6rem;
        letter-spacing: 0.12em;

        color: white;
    }


    /* CYAN INDICATOR */

    .indicator {
        width: 14px;
        height: 14px;

        flex-shrink: 0;

        background: #00f6ff;

        border-radius: 50%;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px #00f6ff,
            0 0 20px rgba(0, 246, 255, 0.7);
    }


    /* INFORMATION CARDS */

    .info-card {
        position: relative;

        margin-bottom: 1.5rem;

        padding: 1.5rem 1.75rem;

        background: rgb(20, 20, 20);

        border: 2px solid white;
        border-radius: 8px;

        box-shadow:
            0 0 5px rgba(255, 255, 255, 0.15),
            inset 0 0 15px rgba(0, 0, 0, 0.7);

        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
    }

    .info-card:hover {
        border-color: #00f6ff;

        transform: translateY(-2px);
    }


    .info-card h3 {
        margin: 0 0 0.75rem;

        font-size: 1.35rem;

        color: #00f6ff;

    }

    .info-card p {
        margin: 0;

        color: white;

        font-family: "Fredoka", sans-serif;
        font-size: 1rem;

        line-height: 1.7;
    }


    

</style>