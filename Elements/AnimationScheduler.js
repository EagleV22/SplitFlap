class AnimationScheduler {
    constructor() {
        this.tasks = [];
    }

      addAnimation(task) {
        this.tasks.push(task);
    }

    startAllAnimations(callback) {
        let index = 0;

        const executeTask = () => {
            if (index < this.tasks.length) {
                const task = this.tasks[index++];
                task(executeTask);
            } else {
                this.tasks = [];
                if (typeof callback === 'function') {
                    callback();
                }
            }
        };

        executeTask();
    }
}
