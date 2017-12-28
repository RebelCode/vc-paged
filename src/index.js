export function CfPaged (Vue) {
    return Vue.extend({
        props: {
            collection: {
                required: true
            },
            selectedKeys: {
                required: true
            }
        },

        methods: {
            /**
             * Toggle item in selected keys. If item
             * already in selected keys, it will remove it,
             * and add to keys in opposite case.
             *
             * @param item
             */
            toggleItem (item) {
                if (this.selectedKeys.hasItem(item)) {
                    this.selectedKeys.removeItem(item)
                } else {
                    this.selectedKeys.addItem(item)
                }
            }
        }
    })
}
