import React from "react";
import { Router, Link } from "@reach/router";

import Home from "./pages/Home";

const About = React.lazy(() => import("./pages/About"));

export default function App() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link> | <Link to="about">About</Link>
                </nav>
            </header>
            <React.Suspense fallback={<div>Loading app...</div>}>
                <Router>
                    <Home who="You" path="/" />
                    <About path="about" />
                </Router>
            </React.Suspense>
        </>
    );
}
