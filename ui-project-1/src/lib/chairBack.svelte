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
    <g class="back">

        <polygon
            points="41.75,96.5 50,93.5 50.5,84 30,90.6"
            fill={getBackMassageColor()}
            stroke="black"
            stroke-width=".5"
        />

        <polygon
            points="25,92 54.5,82.5 55,72 24.5,82"
            fill={getBackMassageColor()}
            stroke="black"
            stroke-width=".5"
        />

        <polygon
            points="55,72 24.5,82 25,71 54.5,61"
            fill={getBackMassageColor()}
            stroke="black"
            stroke-width=".5"
        />

        <polygon
            points="25,71 54.5,61 51,53 27,61"
            fill={getBackMassageColor()}
            stroke="black"
            stroke-width=".5"
        />

    </g>
</svg>

<style>
    .chair-section {
        width: 100%;
        height: 100%;
    }
</style>