export default function Ahhhh() {
  return (
    `/*
        ! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
        */
        
        /*
        1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
        2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
        */
        
        *,
        ::before,
        ::after {
          box-sizing: border-box;
          /* 1 */
          border-width: 0;
          /* 2 */
          border-style: solid;
          /* 2 */
          border-color: #e5e7eb;
          /* 2 */
        }
        
        ::before,
        ::after {
          --tw-content: '';
        }
        
       
        */
        
        html {
          line-height: 1.5;
          /* 1 */
          -webkit-text-size-adjust: 100%;
          /* 2 */
          -moz-tab-size: 4;
          /* 3 */
          -o-tab-size: 4;
             tab-size: 4;
          /* 3 */
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          /* 4 */
          font-feature-settings: normal;
          /* 5 */
          font-variation-settings: normal;
          /* 6 */
        }
        
        
        body {
          margin: 0;
          /* 1 */
          line-height: inherit;
          /* 2 */
        }
        
        /*
        1. Add the correct height in Firefox.
        2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
        3. Ensure horizontal rules are visible by default.
        */
        
        hr {
          height: 0;
          /* 1 */
          color: inherit;
          /* 2 */
          border-top-width: 1px;
          /* 3 */
        }
        
        /*
        Add the correct text decoration in Chrome, Edge, and Safari.
        */
        
        abbr:where([title]) {
          -webkit-text-decoration: underline dotted;
                  text-decoration: underline dotted;
        }
        
        /*
        Remove the default font size and weight for headings.
        */
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }
        
        /*
        Reset links to optimize for opt-in styling instead of opt-out.
        */
        
        a {
          color: inherit;
          text-decoration: inherit;
        }
        
        /*
        Add the correct font weight in Edge and Safari.
        */
        
        b,
        strong {
          font-weight: bolder;
        }
        

        */
        
        code,
        kbd,
        samp,
        pre {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          /* 1 */
          font-size: 1em;
          /* 2 */
        }
        
        /*
        Add the correct font size in all browsers.
        */
        
        small {
          font-size: 80%;
        }
        
        /*        */
        
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        
        sub {
          bottom: -0.25em;
        }
        
        sup {
          top: -0.5em;
        }
        
        /*
        1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
        2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
        3. Remove gaps between table borders by default.
        */
        
        table {
          text-indent: 0;
          /* 1 */
          border-color: inherit;
          /* 2 */
          border-collapse: collapse;
          /* 3 */
        }
        
        /*
        1. Change the font styles in all browsers.
        2. Remove the margin in Firefox and Safari.
        3. Remove default padding in all browsers.
        */
        
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          /* 1 */
          font-size: 100%;
          /* 1 */
          font-weight: inherit;
          /* 1 */
          line-height: inherit;
          /* 1 */
          color: inherit;
          /* 1 */
          margin: 0;
          /* 2 */
          padding: 0;
          /* 3 */
        }
        
        /*
        Remove the inheritance of text transform in Edge and Firefox.
        */
        
        button,
        select {
          text-transform: none;
        }
        
        /*
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Remove default button styles.
        */
        
        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
          /* 1 */
          background-color: transparent;
          /* 2 */
          background-image: none;
          /* 2 */
        }
        
        /*
        Use the modern Firefox focus style for all focusable elements.
        */
        
        :-moz-focusring {
          outline: auto;
        }
        
        
        :-moz-ui-invalid {
          box-shadow: none;
        }
        
        /*
        Add the correct vertical alignment in Chrome and Firefox.
        */
        
        progress {
          vertical-align: baseline;
        }
        
        /*
        Correct the cursor style of increment and decrement buttons in Safari.
        */
        
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }
        
        /*
        1. Correct the odd appearance in Chrome and Safari.
        2. Correct the outline style in Safari.
        */
        
        [type='search'] {
          -webkit-appearance: textfield;
          /* 1 */
          outline-offset: -2px;
          /* 2 */
        }
        
        /*
        Remove the inner padding in Chrome and Safari on macOS.
        */
        
        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }
   
        
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          /* 1 */
          font: inherit;
          /* 2 */
        }
        
        /*
        Add the correct display in Chrome and Safari.
        */
        
        summary {
          display: list-item;
        }
        
        /*
        Removes the default spacing and border for appropriate elements.
        */
        
        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }
        
        fieldset {
          margin: 0;
          padding: 0;
        }
        
        legend {
          padding: 0;
        }
        
        ol,
        ul,
        menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        /*
        Prevent resizing textareas horizontally by default.
        */
        
        textarea {
          resize: vertical;
        }
        
        /*
        1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
        2. Set the default placeholder color to the user's configured gray 400 color.
        */
        
        input::-moz-placeholder, textarea::-moz-placeholder {
          opacity: 1;
          /* 1 */
          color: #9ca3af;
          /* 2 */
        }
        
        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          /* 1 */
          color: #9ca3af;
          /* 2 */
        }
        
        /*
        Set the default cursor for buttons.
        */
        
        button,
        [role="button"] {
          cursor: pointer;
        }
        
        /*
        Make sure disabled buttons don't get the pointer cursor.
        */
        
        :disabled {
          cursor: default;
        }
        
        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block;
          /* 1 */
          vertical-align: middle;
          /* 2 */
        }
        
        /*
        Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
        */
        
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        
        /* Make elements with the HTML hidden attribute stay hidden by default */
        
        [hidden] {
          display: none;
        }
        
        *, ::before, ::after {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x:  ;
          --tw-pan-y:  ;
          --tw-pinch-zoom:  ;
          --tw-scroll-snap-strictness: proximity;
          --tw-gradient-from-position:  ;
          --tw-gradient-via-position:  ;
          --tw-gradient-to-position:  ;
          --tw-ordinal:  ;
          --tw-slashed-zero:  ;
          --tw-numeric-figure:  ;
          --tw-numeric-spacing:  ;
          --tw-numeric-fraction:  ;
          --tw-ring-inset:  ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur:  ;
          --tw-brightness:  ;
          --tw-contrast:  ;
          --tw-grayscale:  ;
          --tw-hue-rotate:  ;
          --tw-invert:  ;
          --tw-saturate:  ;
          --tw-sepia:  ;
          --tw-drop-shadow:  ;
          --tw-backdrop-blur:  ;
          --tw-backdrop-brightness:  ;
          --tw-backdrop-contrast:  ;
          --tw-backdrop-grayscale:  ;
          --tw-backdrop-hue-rotate:  ;
          --tw-backdrop-invert:  ;
          --tw-backdrop-opacity:  ;
          --tw-backdrop-saturate:  ;
          --tw-backdrop-sepia:  ;
        }
        
        ::backdrop {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x:  ;
          --tw-pan-y:  ;
          --tw-pinch-zoom:  ;
          --tw-scroll-snap-strictness: proximity;
          --tw-gradient-from-position:  ;
          --tw-gradient-via-position:  ;
          --tw-gradient-to-position:  ;
          --tw-ordinal:  ;
          --tw-slashed-zero:  ;
          --tw-numeric-figure:  ;
          --tw-numeric-spacing:  ;
          --tw-numeric-fraction:  ;
          --tw-ring-inset:  ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur:  ;
          --tw-brightness:  ;
          --tw-contrast:  ;
          --tw-grayscale:  ;
          --tw-hue-rotate:  ;
          --tw-invert:  ;
          --tw-saturate:  ;
          --tw-sepia:  ;
          --tw-drop-shadow:  ;
          --tw-backdrop-blur:  ;
          --tw-backdrop-brightness:  ;
          --tw-backdrop-contrast:  ;
          --tw-backdrop-grayscale:  ;
          --tw-backdrop-hue-rotate:  ;
          --tw-backdrop-invert:  ;
          --tw-backdrop-opacity:  ;
          --tw-backdrop-saturate:  ;
          --tw-backdrop-sepia:  ;
        }
        
        .fixed {
          position: fixed;
        }
        
        .absolute {
          position: absolute;
        }
        
        .sticky {
          position: sticky;
        }
        
        .bottom-0 {
          bottom: 0px;
        }
        
        .left-0 {
          left: 0px;
        }
        
        .right-0 {
          right: 0px;
        }
        
        .top-0 {
          top: 0px;
        }
        
        .mx-4 {
          margin-left: 1rem;
          margin-right: 1rem;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        .my-2 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .my-4 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        
        .my-auto {
          margin-top: auto;
          margin-bottom: auto;
        }
        
        .ml-2 {
          margin-left: 0.5rem;
        }
        
        .mr-1 {
          margin-right: 0.25rem;
        }
        
        .mt-1 {
          margin-top: 0.25rem;
        }
        
        .mt-2 {
          margin-top: 0.5rem;
        }
        
        .flex {
          display: flex;
        }
        
        .grid {
          display: grid;
        }
        
        .h-10 {
          height: 2.5rem;
        }
        
        .h-12 {
          height: 3rem;
        }
        
        .h-16 {
          height: 4rem;
        }
        
        .h-20 {
          height: 5rem;
        }
        
        .h-4\/6 {
          height: 66.666667%;
        }
        
        .h-\[844px\] {
          height: 844px;
        }
        
        .h-auto {
          height: auto;
        }
        
        .\!w-full {
          width: 100% !important;
        }
        
        .w-10 {
          width: 2.5rem;
        }
        
        .w-11\/12 {
          width: 91.666667%;
        }
        
        .w-16 {
          width: 4rem;
        }
        
        .w-20 {
          width: 5rem;
        }
        
        .w-24 {
          width: 6rem;
        }
        
        .w-6\/12 {
          width: 50%;
        }
        
        .w-\[390px\] {
          width: 390px;
        }
        
        .w-auto {
          width: auto;
        }
        
        .w-full {
          width: 100%;
        }
        
        .\!w-16 {
          width: 4rem !important;
        }
        
        .max-w-md {
          max-width: 28rem;
        }
        
        .max-w-sm {
          max-width: 24rem;
        }
        
        .shrink {
          flex-shrink: 1;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .resize {
          resize: both;
        }
        
        .place-content-center {
          place-content: center;
        }
        
        .place-items-center {
          place-items: center;
        }
        
        .justify-self-center {
          justify-self: center;
        }
        
        .overflow-hidden {
          overflow: hidden;
        }
        
        .overflow-scroll {
          overflow: scroll;
        }
        
        .overflow-x-hidden {
          overflow-x: hidden;
        }
        
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .break-words {
          overflow-wrap: break-word;
        }
        
        .rounded-2xl {
          border-radius: 1rem;
        }
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .rounded-md {
          border-radius: 0.375rem;
        }
        
        .border-gray-400 {
          --tw-border-opacity: 1;
          border-color: rgb(156 163 175 / var(--tw-border-opacity));
        }
        
        .bg-red-400 {
          --tw-bg-opacity: 1;
          background-color: rgb(248 113 113 / var(--tw-bg-opacity));
        }
        
        .bg-transparent {
          background-color: transparent;
        }
        
        .bg-red-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(239 68 68 / var(--tw-bg-opacity));
        }
        
        .p-2 {
          padding: 0.5rem;
        }
        
        .p-4 {
          padding: 1rem;
        }
        
        .px-1 {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .text-center {
          text-align: center;
        }
        
        .text-5xl {
          font-size: 3rem;
          line-height: 1;
        }
        
        .text-6xl {
          font-size: 3.75rem;
          line-height: 1;
        }
        
        .font-black {
          font-weight: 900;
        }
        
        .text-black {
          --tw-text-opacity: 1;
          color: rgb(0 0 0 / var(--tw-text-opacity));
        }
        
        .text-white {
          --tw-text-opacity: 1;
          color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        
        .opacity-50 {
          opacity: 0.5;
        }
        
        .shadow-lg {
          --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        
        .shadow-md {
          --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        
        .outline {
          outline-style: solid;
        }
        
        .outline-double {
          outline-style: double;
        }
        
        .outline-1 {
          outline-width: 1px;
        }
        
        .outline-black {
          outline-color: #000;
        }
        
        .drop-shadow-2xl {
          --tw-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        
        .grayscale {
          --tw-grayscale: grayscale(100%);
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        
        .filter {
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        .ease-out {
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        
        :root{
          --scroll: 0px;
        }
        
        /*
        .styled-bubble {
            background: linear-gradient(to bottom, #4492e5 0%, #007aff 90%, #0057ff 100%);
        }
        
        .container {
            z-index:-1;
            background:
                linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - (100vh - var(--scroll)) * (100 / var(--scroll))), rgba(0,0,0,1) calc(100% - (100vh - var(--scroll)) * (100 / var(--scroll))), rgba(0,0,0,1) 100%);
        }*/
        
        .hover\:grayscale-0:hover {
          --tw-grayscale: grayscale(0);
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }`
  )
}