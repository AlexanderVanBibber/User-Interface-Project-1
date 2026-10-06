<script>

    import {charge_usbc_1, charge_usbc_2, charge_usbc_3, charge_usbc_4} from '$lib/scripts';
    import {usbc_1_charge, usbc_2_charge, usbc_3_charge, usbc_4_charge} from '$lib/scripts';

</script>


<div class="container-3">

    <div class="rectangle left-front">

        <button class="usb-c port1" onclick={charge_usbc_1}></button>

        <button class="usb-c port2" onclick={charge_usbc_2}></button>

        <button class="usb-c port3" onclick={charge_usbc_3}></button>

        <button class="usb-c port4" onclick={charge_usbc_4}></button>


        <div class="charge indicator1">
            <div
                class="charge-level"
                style={`width: ${$usbc_1_charge}%`}
            ></div>
        </div>

        <div class="charge indicator2">
            <div
                class="charge-level"
                style={`width: ${$usbc_2_charge}%`}
            ></div>
        </div>

        <div class="charge indicator3">
            <div
                class="charge-level"
                style={`width: ${$usbc_3_charge}%`}
            ></div>
        </div>

        <div class="charge indicator4">
            <div
                class="charge-level"
                style={`width: ${$usbc_4_charge}%`}
            ></div>
        </div>

    </div>


    <div class="rectangle right-front">

    </div>

</div>


<style>

    .usb-c {
        position: absolute;

        width: 10vw;
        height: 4vw;

        background: black;

        border: 2px solid white;
        border-radius: 2vw;

        cursor: pointer;

        transition:
            border-color 0.2s,
            box-shadow 0.2s,
            transform 0.1s;
    }

/* Center line inside USB-C port */
    .usb-c::after {
        content: "";

        position: absolute;

        top: 50%;
        left: 15%;

        width: 70%;
        height: 2px;

        transform: translateY(-50%);

        background: white;

        border-radius: 2px;

        box-shadow:
            0 0 3px rgba(255, 255, 255, 0.6);
    }

    .usb-c:hover {
        border-color: #00f6ff;

        box-shadow:
            0 0 5px #00f6ff,
            0 0 12px #00f6ff,
            inset 0 0 8px rgba(0, 246, 255, 0.35);
    }

    .port1 {
        position: absolute;
        margin-top: 9vw;
        margin-left: 3vw;
    }

    .port2 {
        position: absolute;
        margin-top: 21vw;
        margin-left: 3vw;
    }

    .port3 {
        position: absolute;
        margin-top: 9vw;
        margin-left: 21vw;
    }

    .port4 {
        position: absolute;
        margin-top: 21vw;
        margin-left: 21vw;
    }

    .charge {
        width: 10vw;
        height: 5vw;

        border: 3px solid white;
        border-radius: 0.8vw;

        position: absolute;

        padding: 0.4vw;

        background: black;

        box-shadow:
            0 0 5px rgba(255, 255, 255, 0.25),
            inset 0 0 8px rgba(255, 255, 255, 0.08);
    }


    .charge::after {
        content: "";

        position: absolute;
        right: -1.2vw;
        top: 50%;

        transform: translateY(-50%);

        width: 0.8vw;
        height: 2vw;

        background: white;

        border-radius: 0.2vw;

        box-shadow:
            0 0 4px rgba(255, 255, 255, 0.5);
    }


    /* Green battery fill */

    .charge-level {
        height: 100%;

        background: #00ff66;

        border-radius: 0.4vw;

        box-shadow:
            0 0 5px #00ff66,
            0 0 12px rgba(0, 255, 102, 0.8),
            inset 0 0 6px rgba(255, 255, 255, 0.25);

        transition:
            width 0.3s ease,
            box-shadow 0.2s ease;
    }


    .indicator1 {
        margin-top: 2vw;
        margin-left: 2vw;
    }

    .indicator2 {
        margin-top: 14vw;
        margin-left: 2vw;
    }

    .indicator3 {
        margin-top: 2vw;
        margin-left: 20vw;
    }

    .indicator4 {
        margin-top: 14vw;
        margin-left: 20vw;
    }

</style>