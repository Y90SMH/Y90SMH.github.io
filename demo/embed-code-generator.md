---
layout: page
title: Embed Code Generator
permalink: /demo/embed-code-generator/
exclude: true
---

<form id="passwordGenerator">
    <section>
        <h2>Settings</h2>
        <span>
            <label for="txtSiteName">Site Name</label>
            <input class="input" id="txtSiteName" placeholder="#SHd" required="required" type="text" value="">
        </span>
        <span>
            <label for="urlPostUrl">Post URL</label>
            <input class="input" id="urlPostUrl" placeholder="https://seanholcroft.co.uk" required="required" type="url" value="">
        </span>
        <h3>Image settings</h3>
        <span>
            <label for="txtImageAltText">Alt Text</label>
            <input class="input" id="txtImageAltText" placeholder="" required="required" type="text" value="">
        </span>
        <span>
            <label for="urlImageUrl">URL</label>
            <input class="input" id="urlImageUrl" placeholder="" required="required" type="url" value="">
        </span>
        <span>
            <label for="numImageHeight">Height</label>
            <input class="input" id="numImageHeight" required="required" type="number" value="900">
        </span>
        <span>
            <label for="numImageWidth">Width</label>
            <input class="input" id="numImageWidth" required="required" type="number" value="1600">
        </span>
        <button id="generate" type="button">Generate Code</button>
    </section>
    <h2>Use this code</h2>
    <textarea class="input" id="result"></textarea>
</form>
<script defer src="/demo/embed-code-generator.js" type="text/javascript"></script>