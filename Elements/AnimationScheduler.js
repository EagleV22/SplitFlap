class AnimationScheduler {
    constructor() {
        this.tasks = [];
    }

    // Add a task to the queue
    addAnimation(task) {
        this.tasks.push(task);
    }

    // Start all animations sequentially
    startAllAnimations(callback) {
        let index = 0;

        // Function to execute tasks one after another
        const executeTask = () => {
            if (index < this.tasks.length) {
                const task = this.tasks[index++];
                // Each task must call executeTask when it's done
                task(executeTask);
            } else {
                // All tasks are completed, clear the tasks list
                this.tasks = [];
                if (typeof callback === 'function') {
                    callback(); // Call the callback if provided
                }
            }
        };

        executeTask(); // Start executing from the first task
    }
}
