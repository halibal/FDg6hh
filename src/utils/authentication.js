const AUTH_PAGES = ['/login', "/signin", '/register', "/signup", '/forgot-password', "/reset-password"];

// checking if user is on authentication pages
export const isAuthPages = (url) => {
    if (url === "/") {
        return false;
    } else {
        return AUTH_PAGES.some(page => page.startsWith(url))
    }
};