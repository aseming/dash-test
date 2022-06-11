<template>
    <div>
        <c-flex class="section-header">
            <h1>Popover</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-popover>
                <c-popover-trigger>
                    <c-button class="button-primary-md">Trigger</c-button>
                </c-popover-trigger>
                <c-popover-content z-index="4" class="popover popover-content">
                    <c-popover-arrow />
                    <c-popover-close-button class="popover-close-button" />
                    <c-popover-body class="popover-body">Are you sure you want to have that milkshake?</c-popover-body>
                    <c-button class="button-link popover-button" variant="ghost">Button</c-button>
                </c-popover-content>
            </c-popover>
        </div>

        <h6>With checkbox</h6>
        <div class="component">
            <c-popover>
                <c-popover-trigger>
                    <c-button class="button-primary-md">Trigger</c-button>
                </c-popover-trigger>
                <c-popover-content z-index="4" class="popover popover-content">
                    <c-popover-arrow />
                    <c-popover-close-button class="popover-close-button" />
                    <c-popover-body class="popover-body">Are you sure you want to have that milkshake?</c-popover-body>
                    <c-checkbox default-is-unchecked class="focus remove popover-checkbox">Checkbox</c-checkbox>
                </c-popover-content>
            </c-popover>
        </div>
    </div>
</template>



<script>

import {
    CPopover,
    CPopoverTrigger,
    CPopoverContent,
    CPopoverBody,
    CPopoverCloseButton,
    CButton,
    CPopoverArrow,
    CCheckbox,
    CFlex
} from '@chakra-ui/vue';

export default {
    components: {
        CPopover,
        CPopoverTrigger,
        CPopoverContent,
        CPopoverBody,
        CPopoverCloseButton,
        CButton,
        CPopoverArrow,
        CCheckbox,
        CFlex
    }
}
</script>

