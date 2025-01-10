// ==UserScript==
// @name         WhatsApp Web UI Customization
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Customize WhatsApp Web UI
// @author       Sahil
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Importing Google fonts - You can change the link of the fonts to any font you want to keep
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap';  // Replace with the desired Google Font URL
    document.head.appendChild(link);

    // Example: Change color of elements with data-icon="archived-outline"
    const customizeUI = () => {
        const archived = document.querySelector('[data-icon="archived-outline"]');
        if (archived) {
            archived.style.color = '#75DA8B'; // Change icon color
        }
        let body = document.querySelector("body")
        if (body) {
            //document.body.style.backgroundImage = "linear-gradient(135deg, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 33%, rgba(32,124,202,1) 70%, rgba(125,185,232,1) 100%)"; // Change Body background color
            document.body.style.backgroundColor = "#0D1117"
        }
        let h1 = document.querySelector("h1")
        if(h1){
            h1.style.backgroundImage = 'linear-gradient(135deg, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 33%, rgba(32,124,202,1) 70%, rgba(125,185,232,1) 100%)';
            h1.style.webkitBackgroundClip = 'text';
            h1.style.color = 'transparent';

            // Add hover effect
            h1.addEventListener('mouseover', function() {
                h1.style.backgroundImage = 'linear-gradient(135deg, rgba(41,137,216,1) 0%, rgba(30,87,153,1) 33%, rgba(125,185,232,1) 100%)';
            });

            h1.addEventListener('mouseout', function() {
                h1.style.backgroundImage = 'linear-gradient(135deg, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 33%, rgba(32,124,202,1) 70%, rgba(125,185,232,1) 100%)';
            });
        }
    };




    // Observe DOM changes to apply customization dynamically
    const observer = new MutationObserver(customizeUI);
    observer.observe(document.body, { childList: true, subtree: true });

    // Apply customization on page load
    customizeUI();
})();
