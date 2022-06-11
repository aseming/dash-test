<template>
    <div>
        <c-flex class="section-header">
            <h1>Table</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="margin-bottom">
            <table>
                <tr>
                    <th class="t-default" align="center">Company
                        <c-icon name="arrow-down" size="1.5em" />
                    </th>
                    <th class="t-default">Contact</th>
                    <th class="t-default">Country</th>
                </tr>
                <tr>
                    <td class="t-default">Alfreds Futterkiste</td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Germany</td>
                </tr>
                <tr>
                    <td class="t-default">Centro comercial Moctezuma</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">Mexico</td>
                </tr>
                <tr>
                    <td class="t-default">Centro comercial Moctezuma</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">Mexico</td>
                </tr>
                <tr>
                    <td class="t-default">Centro comercial Moctezuma</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">Mexico</td>
                </tr>
            </table>
        </div>

        <h6>With action</h6>
        <div class="margin-bottom">
            <table>
                <tr>
                    <th align="center" class="t-default">Company
                        <c-icon name="arrow-down" size="1.5em" />
                    </th>
                    <th class="t-default">Contact</th>
                    <th class="t-default" width="120px">Action</th>
                </tr>
                <tr>
                    <td class="td-ava">
                        <c-avatar name="Evan You" marginRight="8px" size="sm" src="https://bit.ly/chakra-evan-you" />
                        Maria Anders
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
                <tr>
                    <td class="td-ava">
                        <c-avatar name="Evan You" marginRight="8px" size="sm" src="https://bit.ly/chakra-evan-you" />
                        Maria Anders
                    </td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
                <tr>
                    <td class="td-ava">
                        <c-avatar name="Evan You" marginRight="8px" size="sm" src="https://bit.ly/chakra-evan-you" />
                        Maria Anders
                    </td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
                <tr>
                    <td class="td-ava">
                        <c-avatar name="Evan You" marginRight="8px" size="sm" src="https://bit.ly/chakra-evan-you" />
                        Maria Anders
                    </td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
            </table>
        </div>

        <h6>With selection</h6>
        <div class="margin-bottom">
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
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
                <tr>
                    <td class="t-default">
                        <c-checkbox default-is-unchecked variant-color="blue"></c-checkbox>
                    </td>
                    <td class="t-default">Maria Anders</td>
                    <td class="t-default">Francisco Chang</td>
                    <td class="t-default">
                        <c-button size="sm" left-icon="add" class="button-outline-md" variant="outline">Button</c-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>



<script>

import { CFlex, CButton, CIcon, CAvatar, CCheckbox } from "@chakra-ui/vue";

export default {
    components: {
        CFlex,
        CButton,
        CIcon,
        CAvatar,
        CCheckbox
    }
}

</script>


