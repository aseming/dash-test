<template>
    <div>
        <h1 class="section-header">Button</h1>
        <h6>Primary</h6>
        <div class="component-des">
            <img class="crop" src="@/assets/comps/Button@2x.png" width="600px" height="600px" />
            <p class="specs">
                <b>Specs:</b> <br>
                Height: 48px (medium) <br>
                Padding-inline: 32px <br>
                Icon: 24px (if applied) <br>
                Background-color: #0080ff <br>
                Border-radius: 8px <br>
                Font-size: 1rem <br>
                Font-weight: 600 <br>
            </p>
            <p class="specs">
                <b>States:</b> <br>
                Default – Background-color: #0080ff <br>
                Hover – Background-color: #0266c9 <br>
                Pressed – Transform: scale(.90) <br>
                Focus – Background-color: #0266c9, Outline: 3px solid #0080ff(80%) <br>
                Disabled – Background-color: #0080ff(30%) <br>
            </p>
        </div>


    </div>
</template>



<script>

// import { CText } from "@chakra-ui/vue";

export default {
    components: {
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>

