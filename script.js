function handleFile() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const content = event.target.result;
            parseCSV(content);
        }

        reader.readAsText(file);
    } else {
        alert('Please select a CSV file.');
    }
}

function parseCSV(data) {
    const lines = data.split("\n");
    let result = [];
    const headers = lines[0].split(",");
    
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    // For simplicity, just display the parsed data as a string.
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}
