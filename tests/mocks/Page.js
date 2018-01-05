export default class Page {
    constructor (id, template) {
        this.id = id;
        this.template = template;
    }

    render (ctx) {
        return this.template;
    }
}