//styles.global.js
// body {
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//     color: #333;
//   }

//   a {
//     color: #1e90ff;
//     text-decoration: none;
//   }

//   a:hover {
//     text-decoration: underline;
//   }

//styles/reset.css

/* Reset default browser styles */
// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header, hgroup,
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   font: inherit;
//   vertical-align: baseline;
// }

//styles.header
// .header {
//     background-color: #4CAF50;
//     padding: 10px 20px;
//     color: white;
//     text-align: center;
//   }

//   .header a {
//     color: white;
//     margin: 0 15px;
//   }

//   .header a:hover {
//     text-decoration: underline;
//   }

//-styles/utilities.css-------------------------------

// .text-center {
//     text-align: center;
//   }

//   .margin-top {
//     margin-top: 20px;
//   }

//   .padding {
//     padding: 10px;
//   }

//   .hidden {
//     display: none;
//   }

//styles.theme.css------------------------------------------------------------------------------------

// :root {
//     --primary-color: #4CAF50;
//     --secondary-color: #333;
//     --background-color: #f0f0f0;
//     --text-color: #333;
//   }

//   body {
//     background-color: var(--background-color);
//     color: var(--text-color);
//   }

//styles.darktheme--------------------------------------------
// :root {
//     --primary-color: #333;
//     --secondary-color: #4CAF50;
//     --background-color: #1e1e1e;
//     --text-color: #f0f0f0;
//   }

//   body {
//     background-color: var(--background-color);
//     color: var(--text-color);
//   }

//styles.mixins.css--------------------------------------------

// @mixin flex-center {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @mixin box-shadow($x, $y, $blur, $color) {
//     -webkit-box-shadow: $x $y $blur $color;
//     -moz-box-shadow: $x $y $blur $color;
//     box-shadow: $x $y $blur $color;
//   }

//styles.variables.css--------------------------------------------
// $primary-color: #4CAF50;
// $secondary-color: #333;
// $background-color: #f0f0f0;
// $text-color: #333;

// $font-stack: 'Arial, sans-serif';


// Integrating Styles in Components
// You can then import and use these styles in your React components. For example:

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>My Application</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;