import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import Basic from './Basic'

console.log('Rendering...')
render(
    <React.StrictMode><Basic /></React.StrictMode>,
    document.getElementById("root")
);

