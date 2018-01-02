export function CfPaged (Vue) {
    return Vue.extend({
        props: {
            items: {
                required: true
            },

            /**
             * @type {LimitedCollection} Collection of active pages keys.
             */
            selectedKeys: {
                required: true
            },

            /**
             * @type {string} `Paged` wrapper.
             */
            wrapper: {
                default: 'div'
            },

            /**
             * As far in Vue we need to wrap component's template
             * in some root element, consumer of `Paged` can pass his
             * wrapper for pages.
             *
             * @type {Function} Wrapper for the page root
             */
            pageWrapper: {
                default () {
                    return (pageTemplate, page = null) => {
                        return '<div>' + pageTemplate + '</div>'
                    }
                }
            }
        },

        methods: {
            /**
             * Check whether a specific page is active.
             *
             * @param {Page} item Some specific `Page` to be checked
             * @return {Boolean} Is page active
             */
            isPageActive (item) {
                return this.selectedKeys.hasItem(item.id)
            }
        },

        render (h) {
            let renderedPages = []
            let instance = this

            for (let page of this.items.getItems()) {
                let ctx = {
                    items: instance.items,
                    isActive: instance.isPageActive(page)
                }

                let component = Vue.extend({
                    data () {
                        return ctx
                    },
                    template: this.pageWrapper(page.render(ctx), page)
                })

                renderedPages.push(h(component))
            }

            return h(this.wrapper, renderedPages)
        }
    })
}
