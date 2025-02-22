/* global bootstrap */
import { EventBus } from './EventBus';

const bsTooltip = {
	beforeMount(el, binding) {
		const tooltip = new bootstrap.Tooltip(el, {
			trigger: binding.value.trigger || 'hover focus',
			title: binding.value.title,
			placement: binding.value.placement || 'top',
			customClass: binding.value.customClass || '',
			offset: binding.value.offset || '',
		});

		el.tooltip = tooltip;
	},
	beforeUpdate(el, binding) {
		el.tooltip.dispose();
		el.tooltip = new bootstrap.Tooltip(el, {
			trigger: binding.value.trigger || 'hover focus',
			title: binding.value.title,
			placement: binding.value.placement || 'top',
			customClass: binding.value.customClass || '',
			offset: binding.value.offset || '',
		});
	},
	beforeUnmount(el) {
		el.tooltip.dispose();
	},
};

const bsModal = {
	beforeMount(el, binding) {
		const modalInstance = new bootstrap.Modal(el, binding.value || {});
		const modalId = el.getAttribute('id');

		el.addEventListener('shown.bs.modal', () => {
			EventBus.emit(`modal-shown-${modalId}`);
		});

		el.addEventListener('hidden.bs.modal', () => {
			EventBus.emit(`modal-hidden-${modalId}`);
		});

		EventBus.on('showModal', () => {
			modalInstance.show();
		});

		EventBus.on('hideModal', () => {
			modalInstance.hide();
		});

		EventBus.on('toggleModal', () => {
			if (modalInstance._isShown) {
				modalInstance.hide();
			} else {
				modalInstance.show();
			}
		});

		el._modalInstance = modalInstance;
	},

	beforeUnmount(el) {
		if (el._modalInstance) {
			el._modalInstance.dispose();
			delete el._modalInstance;
		}
		const modalId = el.getAttribute('id');
		EventBus.off(`showModal-${modalId}`);
		EventBus.off(`hideModal-${modalId}`);
		EventBus.off(`toggleModal-${modalId}`);
		el.removeEventListener('shown.bs.modal');
		el.removeEventListener('hidden.bs.modal');
	},
};

export default {
	bsTooltip,
	bsModal,
};
