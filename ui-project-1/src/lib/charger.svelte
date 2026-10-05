<script>

    import {charge_usbc_1, charge_usbc_2, charge_usbc_3, charge_usbc_4} from '$lib/scripts';
    import {usbc_1_charge, usbc_2_charge, usbc_3_charge, usbc_4_charge} from '$lib/scripts';

</script>



<div class="container-3">

        <div class = "rectangle left-front">

            <button class = "usb-c port1" onclick={charge_usbc_1}></button>

            <button class = "usb-c port2" onclick={charge_usbc_2}></button>

            <button class = "usb-c port3" onclick={charge_usbc_3}></button>

            <button class = "usb-c port4" onclick={charge_usbc_4}></button>

            <div class = "charge indicator1">
                <div class = "charge-level"
                style = {`width: ${$usbc_1_charge}%`}
                ></div>
            </div>

            <div class = "charge indicator2">
                <div class = "charge-level"
                style = {`width: ${$usbc_2_charge}%`}
                ></div>
            </div>

            <div class = "charge indicator3">
                <div class = "charge-level"
                style = {`width: ${$usbc_3_charge}%`}
                ></div>
            </div>

            <div class = "charge indicator4">
                <div class = "charge-level"
                style = {`width: ${$usbc_4_charge}%`}
                ></div>
            </div>



        </div>

        <div class = "rectangle right-front">

        </div>

</div>

<style>

    .container-3 {

        display: flex;
        flex-direction: column;
        gap: 3vh;
    }

    .left-front {

        width: 50vw;
        height: 25vw;
    }

    .usb-c {

        width: 10vw;
        height: 4vw;
        background: black;
        border-radius: 2vw;
    }

    .port1 {

        position:absolute;
        margin-top: 9vw;
        margin-left: 3vw;
    }

    .port2 {

        position:absolute;
        margin-top: 21vw;
        margin-left: 3vw;
    }

    .port3 {

        position:absolute;
        margin-top: 9vw;
        margin-left: 21vw;
    }

    .port4 {

        position:absolute;
        margin-top: 21vw;
        margin-left: 21vw;
    }

    .charge {

        width: 10vw;
        height: 5vw;
        border: 3px solid black;
        border-radius: 0.8vw;
        position: absolute;
        padding: 0.4vw;
    }

    .charge::after {
        content: "";
        position: absolute;
        right: -1.2vw;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8vw;
        height: 2vw;
        background: black;
        border-radius: 0.2vw;
    }

    .charge-level {
        height: 100%;
        background: black;
        border-radius: 0.4vw;
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