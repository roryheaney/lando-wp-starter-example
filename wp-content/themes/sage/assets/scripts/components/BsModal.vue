<template>
	<div
		ref="modalRef"
		class="modal fade"
		tabindex="-1"
		:id="modalId">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">
						{{ title }}
					</h5>
					<button
						type="button"
						class="btn-close"
						@click="closeModal"
						aria-label="Close" />
				</div>
				<div class="modal-body">
					<slot />
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						@click="closeModal">
						Close
					</button>
					<button
						type="button"
						class="btn btn-primary">
						Save changes
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* global bootstrap */
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { EventBus } from '../modules/EventBus';

export default {
	props: {
		modalId: {
			type: String,
			required: true
		},
		title: {
			type: String,
			default: 'Modal Title'
		}
	},
	// eslint-disable-next-line no-unused-vars
	setup(props) {
		const modalRef = ref(null);
		let bsModal;

		const handleModalShown = () => {
			// eslint-disable-next-line no-console
			console.log(`Modal ${props.modalId} is shown`);
		};

		const handleModalHidden = () => {
			// eslint-disable-next-line no-console
			console.log(`Modal ${props.modalId} is hidden`);
		};

		const closeModal = () => {
			bsModal.hide();
		};

		const showTheModal = () => {
			bsModal.show();
		};

		onMounted(() => {
			bsModal = new bootstrap.Modal(modalRef.value);

			// Example of attaching event listeners
			modalRef.value.addEventListener('shown.bs.modal', handleModalShown);
			modalRef.value.addEventListener('hidden.bs.modal', handleModalHidden);

			// Listen for the showModal event specific to this modal's ID
			EventBus.on(`showModal-${props.modalId}`, showTheModal);
		});

		onBeforeUnmount(() => {
			// Clean up event listeners when component is unmounted
			modalRef.value.removeEventListener('shown.bs.modal', handleModalShown);
			modalRef.value.removeEventListener('hidden.bs.modal', handleModalHidden);

			// Remove EventBus listener
			EventBus.off(`showModal-${props.modalId}`, showTheModal);
		});

		return {
			modalRef,
			closeModal
		};
	}
};
</script>

  <style scoped>
  /* Add any component-specific CSS here */
  </style>
