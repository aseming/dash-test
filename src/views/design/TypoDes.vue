<template>
    <div>
        <h1 class="section-header">Typography</h1>
        <h6>Font name</h6>
        <div class="component">
            <h4>Helvetica</h4>
        </div>

        <h6>Sizes</h6>
        <table>
            <tr>
                <th class="t-default">Category</th>
                <th class="t-default">Weight</th>
                <th class="t-default">Rem</th>
                <th class="t-default">Px</th>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="3rem" fontWeight="600">H1</c-text>
                </td>
                <td class="t-default">600</td>
                <td class="t-default">3rem</td>
                <td class="t-default">48px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="2.5rem" fontWeight="600">H2</c-text>
                </td>
                <td class="t-default">600</td>
                <td class="t-default">2.5rem</td>
                <td class="t-default">40px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="2rem" fontWeight="600">H3</c-text>
                </td>
                <td class="t-default">600</td>
                <td class="t-default">2rem</td>
                <td class="t-default">32px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="1.5rem" fontWeight="600">H4</c-text>
                </td>
                <td class="t-default">600</td>
                <td class="t-default">1.5rem</td>
                <td class="t-default">24px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="1.3rem" fontWeight="600">H5</c-text>
                </td>
                <td class="t-default">600</td>
                <td class="t-default">1.3rem</td>
                <td class="t-default">20px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="1.125rem" fontWeight="600">H6</c-text>
                </td>
                <td class="t-default">600</td>
                <td class="t-default">1.125rem</td>
                <td class="t-default">18px</td>
            </tr>

            <!-- Body -->

            <tr>
                <td class="t-default">
                    <c-text fontSize="1rem" fontWeight="bold">Body 1</c-text>
                </td>
                <td class="t-default">Bold</td>
                <td class="t-default">1rem</td>
                <td class="t-default">16px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="1rem" fontWeight="regular">Body 2</c-text>
                </td>
                <td class="t-default">Regular</td>
                <td class="t-default">1rem</td>
                <td class="t-default">16px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="1rem" fontWeight="bold">Button</c-text>
                </td>
                <td class="t-default">Bold</td>
                <td class="t-default">1rem</td>
                <td class="t-default">16px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="0.875rem" fontWeight="regular">Body 3</c-text>
                </td>
                <td class="t-default">Regular</td>
                <td class="t-default">0.875rem</td>
                <td class="t-default">14px</td>
            </tr>
            <tr>
                <td class="t-default">
                    <c-text fontSize="0.8125rem" fontWeight="regular">Caption</c-text>
                </td>
                <td class="t-default">Regular</td>
                <td class="t-default">0.8125rem</td>
                <td class="t-default">13px</td>
            </tr>


        </table>

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



<style lang="scss">
@import '@/scss/styles.scss'
</style>
