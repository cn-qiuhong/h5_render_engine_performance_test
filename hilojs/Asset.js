/**
 *
 */
var Asset = Hilo.Class.create({
    Mixes: Hilo.EventMixin,
    queue: null,
    constructor: function () {
    },
    load: function () {
        var resources = [];
        for (var i = 0; i < 100; i++) {
            var src = "/ims/".concat(i, ".png");
            resources.push({ id: 'im' + i, src: src });
        }
        this.queue = new Hilo.LoadQueue();
        this.queue.add(resources);
        this.queue.on('complete', this.onComplete.bind(this));
        this.queue.start();
    },
    onComplete: function () {
        for (var i = 0; i < 100; i++) {
            var id = 'im' + i;
            this[id] = this.queue.getContent(id);
        }
        this.queue.off('complete');
        this.fire('complete');
    },
});
