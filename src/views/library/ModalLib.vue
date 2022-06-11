<template>
  <div>
    <c-flex class="section-header">
      <h1>Modal</h1>
      <c-button as="a" class="button-outline-md" variant="outline" 
        href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
        GitHub
      </c-button>
    </c-flex>

    <h6>Default</h6>
    <div class="component">
      <c-button class="button-primary-md" @click="open">Open Modal</c-button>
      <c-modal :is-open="isOpen" :on-close="close" :size="size" class="modal">
        <c-modal-content borderRadius="lg" padding="4px" ref="content">
          <c-modal-header class="modal-header">Title</c-modal-header>
          <c-modal-close-button class="modal-close-button" />
          <c-modal-body>
            <p>Suspendisse faucibus interdum posuere lorem ipsum dolor. Tristique senectus et netus et malesuada fames
              ac turpis. </p>
            <Lorem add="3s" />
          </c-modal-body>
          <c-modal-footer class="modal-footer">
            <c-button class="button-primary-md" mr="3">
              Save
            </c-button>
            <c-button class="button-scale" @click="close">Cancel</c-button>
          </c-modal-footer>
        </c-modal-content>
        <c-modal-overlay class="test6" />
      </c-modal>
    </div>

    <h6>Form</h6>
    <div class="component">
      <c-button class="button-primary-md" @click="open2">Open Modal</c-button>
      <c-modal :is-open="isOpen2" :on-close="close2" :size="size2">
        <c-modal-content borderRadius="lg" padding="4px" ref="content">
          <c-modal-header class="modal-header-text">Title</c-modal-header>
          <c-modal-close-button class="modal-close-button" />
          <c-modal-body>
            <c-form-control>
              <c-form-label>First name</c-form-label>
              <c-input ref="initialRef" placeholder="First name" />
            </c-form-control>
            <c-form-control mt="4">
              <c-form-label>Last name</c-form-label>
              <c-input placeholder="Last name" />
            </c-form-control>
          </c-modal-body>
          <c-modal-footer class="modal-footer">
            <c-button class="button-primary-md" mr="3">
              Save
            </c-button>
            <c-button class="button-scale" @click="close2">Cancel</c-button>
          </c-modal-footer>
        </c-modal-content>
        <c-modal-overlay />
      </c-modal>
    </div>
  </div>
</template>



<script>

import {
  CModal,
  CModalOverlay,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CButton,
  CFormControl,
  CFormLabel,
  CInput,
  CFlex
} from "@chakra-ui/vue";

export default {
  components: {
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CButton,
    CFormControl,
    CFormLabel,
    CInput,
    CFlex
  },
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      size: 'xl',
      size2: 'md'
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    open2() {
      this.isOpen2 = true
    },
    close2() {
      this.isOpen2 = false
    },
  },

}
</script>



