<script>

    import { chairHeight } from '$lib/scripts';

</script>

<svg
    class="chair-section"
    viewBox="0 0 100 134"
    xmlns="http://www.w3.org/2000/svg"
>
    <g class="base" transform={`translate(0 ${$chairHeight * 1.1})`}>

        <!-- Top -->
        <polygon
            points="25,109 55,99 75,109 45,119"
            fill="#555"
            stroke="black"
            stroke-width=".5"
        />

        <!-- Left / Front Face -->
        <polygon
            points="25,109 45,119 45,131 25,121"
            fill="#444"
            stroke="black"
            stroke-width=".5"
        />

        <!-- Right Face -->
        <polygon
            points="45,119 75,109 75,121 45,131"
            fill="#333"
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

