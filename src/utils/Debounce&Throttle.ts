/**
 * spawning a debounced function
 * @param fn{Function} - the function to debounced
 * @param delay{number} - trigger delay
 */
function debounce<T extends (...args: any) => any>(fn: T, delay: number) {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>): Promise<ReturnType<T>> => {
        if (timer) clearTimeout(timer);
        return new Promise((resolve) => {
            timer = setTimeout(() => {
                resolve(fn(Array.prototype.slice.call(args)));
            }, delay);
        });
    };
}

/**
 * spawning a throttled function
 */
function throttle<T extends (...args: any) => any>(fn: T, delay: number) {
    let lastTime = 0;
    return (...args: Parameters<T>): Promise<ReturnType<T>> => {
        const now = Date.now();
        if (now - lastTime > delay) {
            lastTime = now;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(fn(Array.prototype.slice.call(args)));
                }, delay);
            });
        }
        return Promise.reject();
    };
}

export { debounce as generateDebounce, throttle as generateThrottle }
