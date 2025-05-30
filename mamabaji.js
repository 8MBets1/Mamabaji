document.querySelectorAll('.mod-multiChat-smsfloat1').forEach(function(element) {
    element.addEventListener('click', function(event) {
        // Get the full text content of the clicked element
        const textToCopy = element.innerText || element.textContent;

        // Create a temporary textarea to hold the text
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();

        // Copy the text to the clipboard
        try {
            document.execCommand('copy');
            // Show a temporary tooltip near the mouse cursor
            showCopyTooltip(event.pageX, event.pageY);
        } catch (err) {
            // Optional: handle error (you could also show a different tooltip)
        }

        // Clean up: remove the temporary textarea
        document.body.removeChild(textarea);
    });
});

function showCopyTooltip(x, y) {
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Copied!';
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${x + 10}px`; // offset by 10px so it's not directly under the cursor
    tooltip.style.top = `${y + 10}px`;
    tooltip.style.padding = '5px 10px';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    tooltip.style.color = '#fff';
    tooltip.style.borderRadius = '4px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = 1000;
    tooltip.style.transition = 'opacity 0.5s ease';
    tooltip.style.opacity = '1';
    document.body.appendChild(tooltip);

    // Fade out and remove the tooltip after a short delay
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 500);
    }, 300); // Tooltip stays visible for 1 second
}
