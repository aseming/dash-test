<template>
    <div>
        <h1 class="section-header">Grid</h1>
        <h6>8px grid and spacing</h6>
        <div class="component-des">
            <img src="@/assets/Grid@2x.png" width="600px" height="296px" />
        </div>

        <h6>Padding and margin (px)</h6>
        <div class="component-des">
            <img class="crop" src="@/assets/Padding@2x.png" width="600px" height="500px" />
        </div>

        <h6>Layout (px)</h6>
        <div class="component-des">
            <img class="crop" src="@/assets/Layout@2x.png" width="600px" height="500px" />
            <c-text mt="16px">12 col (1280px)</c-text>
            <c-text>Gutter: 32px</c-text>
            <c-text>Margin: 40px</c-text>
        </div>

    </div>
</template>



<script>

import { CText } from "@chakra-ui/vue";

export default {
    components: {
        CText
    }
}
</script>

