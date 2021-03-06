// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In the PDF viewer, each word is highlighted independently. 

// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25. 
// There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

function designerPdfViewer(h, word) {
    return Math.max(...word.split('').map((e) => h[e.charCodeAt(0) - 97] * word.length));
}