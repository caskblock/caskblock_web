export const resetUrlParams = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.forEach((_, key) => currentUrl.searchParams.delete(key));
    window.history.pushState({}, '', currentUrl.toString());
};