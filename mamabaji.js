// Select all elements with the class "mod-multiChat-smsfloat1"
document.querySelectorAll('.mod-multiChat-smsfloat1').forEach(function(element) {
    element.addEventListener('click', function() {
        // Get the full text content of the clicked element
        const textToCopy = element.innerText || element.textContent;

        // Create a temporary textarea to hold the text
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();

        // Copy the text to the clipboard
        try {
            const successful = document.execCommand('copy');
            console.log(successful ? 'Text copied to clipboard' : 'Failed to copy text');
        } catch (err) {
            console.error('Oops, unable to copy', err);
        }

        // Clean up: remove the temporary textarea
        document.body.removeChild(textarea);
    });
});
