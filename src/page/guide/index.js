import React, { lazy, Suspense, useEffect, useState } from 'react'
import { importMDX } from 'mdx.macro'
import {
    useParams
} from "react-router-dom";
import './style.css'
export default function Guide() {
    let { query } = useParams();
    let Content
    switch (query) {
        case 'how-does-the-internet-work':
            Content = lazy(() => importMDX('./how-does-the-internet-work.mdx'))
            break;
        case 'how-does-the-browser-work':
            Content = lazy(() => importMDX('./how-does-the-browser-work.mdx'))
            break;
        case 'editor':
            Content = lazy(() => importMDX('./editor.md'))
            break;
        case 'html':
            Content = lazy(() => importMDX('./html.mdx'))
            break;
        case 'css':
            Content = lazy(() => importMDX('./css.mdx'))
            break;
        case 'javascript':
            Content = lazy(() => importMDX('./javascript.md'))
            break;
        case 'git':
            Content = lazy(() => importMDX('./git.md'))
            break;
        case 'node':
            Content = lazy(() => importMDX('./node.md'))
            break;
        default:
            break;
    }
    return <div className="guide-container">
        <Suspense fallback={<div>Loading...</div>}>
            <Content />
        </Suspense>
    </div>
}