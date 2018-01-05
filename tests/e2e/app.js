import {CfPaged} from './../../src/index';
import Page from './../mocks/Page';
import Vue from 'vue';
import {FunctionalLimitedCollection, FLC_OVERFLOW_THROW} from './../../node_modules/std-lib/src/FunctionalLimitedCollection'
import {FunctionalArrayCollection} from './../../node_modules/std-lib/src/FunctionalArrayCollection'

let store = {
    items: [
        new Page(1, '<h1>Hello World!</h1>'),
        new Page(2, '<avatar name="John Doe"></avatar>'),
    ],
    selectedItems: []
};

Vue.component('avatar', {
    props: ['name'],
    render(h) {
        return h('div', [
            h('h2', [this.name])
        ])
    }
});

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data () {
            return {
                items: new FunctionalArrayCollection(() => {
                    return store.items
                }, (newItems) => {
                    store.items = newItems
                }, (item) => {
                    return item.id
                }),
                selectedItems: new FunctionalLimitedCollection(() => {
                    return store.selectedItems
                }, (newSelected) => {
                    store.selectedItems = newSelected
                }, (item) => {
                    return item
                }, 5, FLC_OVERFLOW_THROW)
            }
        },
        components: {
            'paged': new CfPaged(Vue)
        }
    })
});
