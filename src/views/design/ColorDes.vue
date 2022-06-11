<template>
    <div>
        <h1 class="section-header">Color</h1>
        <h6>Style</h6>
        <div class="component">
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon main-color" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Accent</c-text>
                    <c-text>#0080FF</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon main-hover" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Hover</c-text>
                    <c-text>#135DCE</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon main-disabled" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Disabled</c-text>
                    <c-text>#0080FF(50%)</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon secondary-color" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Secondary</c-text>
                    <c-text>#C3C9CC</c-text>
                </c-box>
            </c-stack>


        </div>

        <h6>Label</h6>
        <div class="component">
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon label-primary" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Primary</c-text>
                    <c-text>#303030</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon label-secondary" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Secondary</c-text>
                    <c-text>#303030(80%)</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon label-tertiary" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Tertiary</c-text>
                    <c-text>#303030(50%)</c-text>
                </c-box>
            </c-stack>

        </div>

        <h6>System</h6>
        <div class="component">
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon success" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Success</c-text>
                    <c-text>#3AC922</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon attention" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Attention</c-text>
                    <c-text>#F6D523</c-text>
                </c-box>
            </c-stack>
            <c-divider marginBottom="20px" borderColor="white" />
            <c-stack class="stack">
                <c-box>
                    <span class="color-icon error" />
                </c-box>
                <c-box>
                    <c-text class="color-title">Error</c-text>
                    <c-text>#FF3B30</c-text>
                </c-box>
            </c-stack>

        </div>

    </div>
</template>



<script>

import { CBox, CStack, CText, CDivider } from "@chakra-ui/vue";

export default {
    components: {
        CBox,
        CStack,
        CText,
        CDivider
    }
}
</script>


<!-- is-inline bg="pink.300" :spacing="4" align="center" -->