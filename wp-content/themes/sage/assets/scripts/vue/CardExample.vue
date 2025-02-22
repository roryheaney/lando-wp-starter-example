<template>
	<section class="container">
		<div class="row">
			<div class="col">
				<!-- Using v-for to loop over items -->
				<div
					v-for="item in items"
					:key="item.id">
					<!-- Button to trigger modal -->
					<button
						class="btn btn-primary"
						@click="showModal(item.id)">
						Show Modal {{ item.name }}
					</button>

					<!-- Modal Component -->
					<ModalComponent
						:modal-id="item.id"
						:title="'Modal ' + item.name" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from 'vue';
import { EventBus } from '../modules/EventBus';
import ModalComponent from '../components/BsModal.vue';

export default {
	name: 'CardExample',
	components: {
		ModalComponent,
	},
	setup() {
		const items = ref([
			{ id: 'modal1', name: '1' },
			{ id: 'modal2', name: '2' },
			// ... add more items as needed
		]);

		const showModal = (modalId) => {
			// eslint-disable-next-line no-console
			console.log(modalId);
			EventBus.emit(`showModal-${modalId}`);
		};

		const hideModal = () => {
			EventBus.emit('hideModal');
		};

		// return everything you want to expose to your template
		return {
			items,
			showModal,
			hideModal
		};
	}
};
</script>
