import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import InputCropper from '@/components/InputCropper.vue'


describe('App.vue', () => {
    it('check the stup-component InputCropper was mounted', () => {
        const wrapper = shallowMount(App);

        expect(wrapper.find(InputCropper).exists()).to.equal(true);
    });
});