<template>
	<div
		:id="id"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		v-bs-modal>
		<slot />
	</div>
</template>

<script>
import { EventBus } from '../modules/EventBus';

export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			default: '',
		},
	},
	created() {
		EventBus.on(`modal-shown-${this.id}`, this.modalShown);
		EventBus.on(`modal-hidden-${this.id}`, this.modalHidden);
	},
	beforeUnmount() {
		EventBus.off(`modal-shown-${this.id}`, this.modalShown);
		EventBus.off(`modal-hidden-${this.id}`, this.modalHidden);
	},
	methods: {
		hideModal() {
			EventBus.emit(`hideModal-${this.id}`);
		},
		modalShown() {
			// eslint-disable-next-line no-console
			console.log(`Modal ${this.id} is shown`);
		},
		modalHidden() {
			// eslint-disable-next-line no-console
			console.log(`Modal ${this.id} is hidden`);
		},
	},
};
</script>
