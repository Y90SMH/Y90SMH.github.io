---
layout: page
title: JavaScript Password Generator
permalink: /demo/javascript-password-generator/
exclude: true
---

<form id="passwordGenerator">
    <label for="passwordLength">Password Length:</label>
    <input class="input" id="passwordLength" max="254" min="1" required="required" type="number" value="24">
    <span class="spanCheckbox">
        <input id="displayPhonetic" type="checkbox">
        <label class="labelCheckbox" for="displayPhonetic">Show Phonetic Words</label>
    </span>
    <button id="generatePassword" type="button">Generate Password</button>
    <hr>
    <label for="generatedPassword">Generated Password: </label>
    <input class="input input-meter" id="generatedPassword" type="text">
    <meter id="generatedPasswordStrengthMeter" max="4" value="0"></meter>
    <p id="phoneticPassword"></p>
</form>
<script defer src="/demo/zxcvbn.js" type="text/javascript"></script>
<script defer src="/demo/javascript-password-generator.js" type="text/javascript"></script>