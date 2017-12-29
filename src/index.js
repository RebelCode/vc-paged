export function CfPaged (Vue) {
    return Vue.extend({
        props: {
            items: {
                required: true
            },
            selectedKeys: {
                required: true
            },
            wrapper: {
                default: 'div'
            },
            pageWrapper: {
                default: 'div'
            }
        },

        methods: {
            /**
             * Check whether a specific page is active.
             *
             * @param item
             * @return {Boolean}
             */
            isPageActive (item) {
                return this.selectedKeys.hasItem(item.id)
            }
        },

        render (h) {
            let renderedPages = []

            for (let page of this.items.getItems()) {
                renderedPages.push(h(this.pageWrapper, {
                    domProps: {
                        innerHTML: page.render({
                            items: this.items,
                            isActive: this.isPageActive(page)
                        })
                    }
                }))
            }

            return h(this.wrapper, renderedPages)
        }
    })
}
