import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

import { userService } from '../services';
import { Nav, Alert } from '../components';

export default App;

function App({ Component, pageProps }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    // useEffect(() => {
    //     // on initial load - run auth check 
    //     authCheck(router.asPath);

    //     // on route change complete - run auth check 
    //     router.events.on('routeChangeComplete', authCheck)

    //     // unsubscribe from events in useEffect return function
    //     return () => {
    //         router.events.off('routeChangeStart', hideContent);
    //         router.events.off('routeChangeComplete', authCheck);
    //     }

    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);


    /// possible rerendeing loop from unfinished logic coem back after db connection to fix 
    // function authCheck(url) {
    //     // redirect to login page if accessing a private page and not logged in 
    //     setUser(userService.userValue);
    //     const loginPaths = ['/account/login', '/account/register'];
    //     const protectedPaths = ['/Profile/profile', '/Order', '/OrderHistory'];
    //     const publicPaths = ['/'];
    //     const path = url.split('?')[0];
    //     if (!userService.userValue && protectedPaths.includes(path)) {
    //         setAuthorized(false);
    //         router.push({
    //             pathname: '/account/login',             //#TODO: 
    //             query: { returnUrl: router.asPath }
    //         });
    //     }else if (!userService.userValue && publicPaths.includes(path)){
    //         setAuthorized(false);
    //         router.push({
    //             pathname: "/",
    //             query: {returnUrl: router.asPath }
    //         });
    //     }
    //     else if (!userService.userValue && loginPaths.includes(path)){
    //         setAuthorized(false);
    //         router.push({
    //             pathname: "/account/login",
    //             query: {returnUrl: router.asPath }
    //         });
    //     }
    //      else {
    //         setAuthorized(true);
    //     }
        
    // }

    return (
        <>
            <div className={`app-container ${user ? 'bg-light' : ''}`}>
                <Nav />
                <Alert />

                    <Component {...pageProps} />
            
            </div>

        </>
    );
}
