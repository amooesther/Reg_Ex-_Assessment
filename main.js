function redactText() {
    const originalText = document.getElementById("originalText").value;
    const wordsToRedact = document.getElementById("wordsToRedact").value.split(' ');


    const redactRegex = new RegExp(wordsToRedact.join('|'), 'gi');


    const redactedText = originalText.replace(redactRegex, '****');

    document.getElementById("redactedText").textContent = redactedText;
}