export function convertTitleToHandle(title, replacement = "-") {
    const lowercasedTitle = title.toLowerCase();
    const handle = lowercasedTitle.replace(/[^a-z0-9]+/g, replacement);
    return handle;
}
