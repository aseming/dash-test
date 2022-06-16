<template>
    <div>
        <div class="content-header">
            <h3>Table</h3>
            <c-flex gap="16px">
                <c-button left-icon="add" variant="solid" class="button-primary-sm">
                    Add Vendor</c-button>
                <c-button variant="outline" class="button-outline-sm" @click="show = !show">
                    Filters</c-button>
            </c-flex>
        </div>

        <c-collapse :is-open="show">
            <div class="collapse">
            </div>
        </c-collapse>


        <c-flex>
            <table>
                <tr>
                    <th class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </th>
                    <th align="center" class="t-default">Company
                        <c-icon name="arrow-down" size="1.5em" />
                    </th>
                    <th class="t-default">Contact</th>
                    <th class="t-default" width="120px">Action</th>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">
                        <c-button size="sm" class="button-ghost-sm" variant="ghost">Button
                        </c-button>
                    </td>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" class="button-ghost-sm" variant="ghost">Button
                        </c-button>
                    </td>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" class="button-ghost-sm" variant="ghost">Button
                        </c-button>
                    </td>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" class="button-ghost-sm" variant="ghost">Button
                        </c-button>
                    </td>
                </tr>
            </table>
        </c-flex>

        


    </div>


</template>

<script>
import {
    CFlex,
    CButton,
    CCollapse,

} from "@chakra-ui/vue";

export default {
    components: {
        CFlex,
        CButton,
        CCollapse,
    },
    data() {
        return {
            show: false
        }
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';




table {
    border-spacing: 0pt;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #dddddd;
    overflow: hidden;
    margin-top: 32px;
    margin-inline: 32px;
}


.t-default {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
    padding-left: 16px;
    align-items: baseline;
}

.td-ava {
    border: 1px solid #dddddd;
    text-align: left;
    padding-left: 8px;
}


tr:nth-child(even) {
    background-color: #dddddd40;
}


.margin-bottom {
    margin-bottom: 64px;
}

.collapse {
    margin-inline: 32px;
    margin-top: 32px;
    height: 80px;
    border-radius: 8px;
    padding: 24px;
    background-color: white;
    border: 1pt solid #30303020;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.03);
}




c-form-helper-text {
    font-size: 0.9rem;
}
</style>

