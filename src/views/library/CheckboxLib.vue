<template>
    <div>
        <c-flex class="section-header">
            <h1>Checkbox</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Checked</h6>
        <div class="component">
            <c-checkbox default-is-checked class="focus remove">Checkbox</c-checkbox>
        </div>

        <h6>Unchecked</h6>
        <div class="component">
            <c-checkbox default-is-unchecked variant-color="blue">Checkbox</c-checkbox>
        </div>

        <h6>Disabled checked</h6>
        <div class="component">
            <c-checkbox is-disabled default-is-checked variant-color="blue">Checkbox</c-checkbox>
        </div>

        <h6>Disabled unchecked</h6>
        <div class="component">
            <c-checkbox is-disabled default-is-unchecked variant-color="blue">Checkbox</c-checkbox>
        </div>

        <h6>Group</h6>
        <div class="component">
            <c-box>
                <c-checkbox :is-checked="allChecked" :is-indeterminate="isIndeterminate"
                    @change="(val, $e) => { checkedItems = [$e.target.checked, $e.target.checked] }">
                    Parent Checkbox
                </c-checkbox>
                <c-stack pl="6" mt="1" spacing="1">
                    <c-checkbox :is-checked="checkedItems[0]"
                        @change="(val, $e) => { checkedItems = [$e.target.checked, checkedItems[1]] }">
                        Child Checkbox 1
                    </c-checkbox>
                    <c-checkbox :is-checked="checkedItems[1]"
                        @change="(val, $e) => { checkedItems = [checkedItems[0], $e.target.checked] }">
                        Child Checkbox 2
                    </c-checkbox>
                </c-stack>
            </c-box>

        </div>
    </div>
</template>



<script>
import { CCheckbox, CBox, CStack, CFlex, CButton } from "@chakra-ui/vue";

export default {
    components: {
        CCheckbox,
        CBox,
        CStack,
        CFlex,
        CButton
    },
    data() {
        return {
            checkedItems: [false, false]
        }
    },
    computed: {
        allChecked() {
            return this.checkedItems.every(Boolean)
        },
        isIndeterminate() {
            return this.checkedItems.some(Boolean) && !this.allChecked
        }
    }

}
</script>

