class AnimationScheduler {
    constructor() {
        this.queue = [];
        this.running = false;
    }

    addAnimation(task) {
        console.log("Adding animation task, queue length before:", this.queue.length);
        this.queue.push(task);
        this.next();

    }

    next() {
        if (!this.running && this.queue.length > 0) {
            this.running = true;
            const task = this.queue.shift();
            task(() => {
                this.running = false;
                console.log('Task completed, calling next.');
                setTimeout(() => this.next(), 200);
            });
        } else {
            console.log(`Either still running: ${this.running} or no tasks left in the queue.`);
        }
    }

}
