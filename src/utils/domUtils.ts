/**
 * Scroll the given HTML element into view, with the specified timeout in milliseconds.
 * If the element is not yet in the DOM, it will be waited for using requestIdleCallback with a maximum timeout of 1 second.
 * The function will return a promise that resolves when the element is scrolled into view.
 * @param element - The HTML element to scroll into view.
 * @param timeout - The timeout in milliseconds to wait for the element to be in the DOM.
 * @returns - A promise that resolves when the element is scrolled into view.
 */
export function scrollElementIntoView(element?: Element, timeout = 300) {
    if (!element) { return; }
    setTimeout(() => {
        requestIdleCallback(() => {
            element.scrollIntoView({
                block: "start",
                behavior: "smooth",
                inline: 'nearest',
            });
        }, { timeout: 1000 });
    }, timeout);
}