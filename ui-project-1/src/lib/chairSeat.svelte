<script>
    import {
            backMassageOn,
            backMassageLevel,
            seatMassageOn,
            seatMassageLevel
        } from '$lib/scripts';

        function getBackMassageColor() {
            if (!$backMassageOn) {
                return '#555';
            }

            const colors = [
                '#ffb347',
                '#ff9a26',
                '#f57c00',
                '#dc6500',
                '#b84d00'
            ];

            return colors[$backMassageLevel - 1];
        }

        function getSeatMassageColor() {
            if (!$seatMassageOn) {
                return '#555';
            }

            const colors = [
                '#ffb347',
                '#ff9a26',
                '#f57c00',
                '#dc6500',
                '#b84d00'
            ];

            return colors[$seatMassageLevel - 1];
        }
</script>

<svg
    class="chair-section"
    viewBox="0 0 100 134"
    xmlns="http://www.w3.org/2000/svg"
>
    <g class="upper-box">

        <!-- Top -->
        <polygon
            points="25,102 55,92 75,102 45,112"
            fill={getSeatMassageColor()}
            stroke="black"
            stroke-width=".5"
        />

        <!-- Right Face -->
        <polygon
            points="45,112 75,102 75,109 45,119"
            fill="#333"
            stroke="black"
            stroke-width=".5"
        />
        
        <polygon
            points="75,109 75,92 70.5,93 70.5,110.5"
            fill="#333"
            stroke="black"
            stroke-width=".5"
        />

        <polygon
            points="70.5,93 50,84 50,93.5 70.5,103.5"
            fill="#333"
            stroke="black"
            stroke-width=".5"
        />

        <!-- Right Armrest Top -->
        
    </g>

    <g class="clickable">
        <a class="leftside" href="/leftside">
            <polygon
                points="25,92 45,102 45,119 25,109"
                fill="#444"
                stroke="black"
                stroke-width=".5"
            />
        </a>

        <a class="rightarm" href="/rightarm">

            <polygon
            points="45,102 50,100.5 30,90.6 25,92"
            fill="#333"
            stroke="black"
            stroke-width=".5"
            />
        
        
        </a>

        <a class="leftarm" href="/leftarm">

            <polygon
            points="75,92 70.5,93 50,84 54.5,82.5"
            fill="#333"
            stroke="black"
            stroke-width=".5"
            />
        
        
        </a>

        <a class="leftfront" href="/leftfront">
            <polygon
            points="45,102 50,100.5 50,117.3 45,119"
            fill="#444"
            stroke="black"
            stroke-width=".5"
            />
        
        </a>
        
        
        
    </g>
</svg>

<style>
    .chair-section {
        width: 100%;
        height: 100%;
    }

    .leftarm polygon {
        cursor: pointer;

        transition: fill 0.2s, filter 0.2s;
    }

    .rightarm polygon {
        cursor: pointer;

        transition: fill 0.2s, filter 0.2s;
    }

    .leftside polygon {
        cursor: pointer;

        transition: fill 0.2s, filter 0.2s;
    }

    .leftfront polygon {
        cursor: pointer;

        transition: fill 0.2s, filter 0.2s;
    }


    .leftarm:hover polygon {

        fill: #00f6ff;

        filter:
            drop-shadow(0 0 3px #00f6ff)
            drop-shadow(0 0 8px #00f6ff);
    }

    .rightarm:hover polygon {

        fill: #00f6ff;

        filter:
            drop-shadow(0 0 3px #00f6ff)
            drop-shadow(0 0 8px #00f6ff);
    }

    .leftside:hover polygon {

        fill: #00f6ff;

        filter:
            drop-shadow(0 0 3px #00f6ff)
            drop-shadow(0 0 8px #00f6ff);
    }

    .leftfront:hover polygon {

        fill: #00f6ff;

        filter:
            drop-shadow(0 0 3px #00f6ff)
            drop-shadow(0 0 8px #00f6ff);
    }

.clickable {
    cursor: pointer;
}

.clickable polygon {
    pointer-events: all;
}

</style>: