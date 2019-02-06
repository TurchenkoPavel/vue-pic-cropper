import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'


describe('App.vue', () => {
    it('check is wrapper a div', () => {
        const wrapper = mount(App);
        expect(wrapper.is('div')).to.equal(true);
    })

    it('check does wrapper has a class file-upload', () => {
        const wrapper = mount(App);
        expect(wrapper.classes()).to.contain('file-upload');
    })

    it('find input', () => {
        const wrapper = mount(App);
        const input = wrapper.find('input[type="file"]')
        expect(input.is('input')).to.equal(true)
    })

    it('does input has a file type', () => {
        const wrapper = mount(App);
        const input = wrapper.find('input[type="file"]')
        expect(input.attributes('type')).to.equal('file')
    })

    it('does input has class .file-upload__input', () => {
        const wrapper = mount(App);
        const input = wrapper.find('input[type="file"]')
        expect(input.classes()).to.contain('file-upload__input')
    })

    it('does input has id #files', () => {
        const wrapper = mount(App);
        const input = wrapper.find('input[type="file"]')
        expect(input.attributes('id')).to.equal('files')
    })

    it('find label for input', () => {
        const wrapper = mount(App);
        const label = wrapper.find('label');
        expect(label.attributes('for')).to.equal('files');
    })

    it('check does label has class .file-upload__label', () => {
        const wrapper = mount(App);
        const label = wrapper.find('label');
        expect(label.classes()).to.contain('file-upload__label');
    })

    it('check label text', () => {
        const label_text = 'Choose a file';
        const wrapper = mount(App);
        expect(wrapper.find('label').text()).to.equal(label_text);
    })

})