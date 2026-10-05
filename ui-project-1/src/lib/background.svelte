<div class = "container">

    <div class = "rectangle left-arm">

    </div>

    <div class = "rectangle right-arm">

    </div>

    <div class= "container-2">

        <div class = "rectangle left-side">

        </div>

        <div class = "rectangle right-side">

        </div>

    </div>

    <div class="container-3">

        <div class = "rectangle left-front">

        </div>

        <div class = "rectangle right-front">

        </div>

    </div>
    

</div>


<div class = "rectangle top-bar">

</div>

<style>
    .container {

        display: flex;
        gap: 2vw;
        margin-top: 10vh;
        margin-left: 1vw;
    }

    .container-2 {

        display: flex;
        flex-direction: column;
        gap: 3vh;
    }

    .container-3 {

        display: flex;
        flex-direction: column;
        gap: 3vh;
    }
    .rectangle {
        background: gray;
    }
    .top-bar {

        position:absolute;
        left: 0vw;
        top: 0vh;
        width: 100%;
        height: 7vh;
    }
    .left-arm {

        width: 20vw;
        height: 89vh;

    }
    .right-arm {

        width: 20vw;
        height: 89vh;
    }

    .left-side {

        width: 24vw;
        height: 43vh;
    }

    .right-side {

        width: 24vw;
        height: 43vh;
    }

    .right-front {

        width: 20vw;
        height: 36vh;
    }

    .left-front {

        width: 20vw;
        height: 36vh;
    }


</style>