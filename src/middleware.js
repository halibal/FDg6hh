import { NextResponse } from "next/server";
import { isAuthPages } from "./utils/authentication";

export async function middleware(request) {
    const { url, nextUrl, cookies } = request;
    const { value: token } = cookies.get("token") ?? { value: null };
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        if (!token) {
            const response = NextResponse.next();
            return response;
        }
        const response = NextResponse.redirect(new URL(`/`, url));
        return response;
    }

    if (!token) {
        // if user not authenticated and tries to go to a protected page, page is stored in nextUrl 
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set('next', nextUrl.pathname);
        return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        '/login',
        '/register',
        "/",
        "/products/:path*",
        "/categories/:path*"
    ]
};