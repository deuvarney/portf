/**
 * Saves the given text to the user's clipboard.
 *
 * @param text The text to be saved to the user's clipboard.
 */
export function saveToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
}