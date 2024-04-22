class AnimationScheduler {
    constructor() {
        this.animations = [];
    }

    addAnimation(task) {
        this.animations.push(task);
    }

    startAllAnimations() {
        this.animations.forEach(task => {
            task();  // Start each task
        });
        this.animations = [];
    }
}
