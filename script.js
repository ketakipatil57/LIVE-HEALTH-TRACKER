function checkHealth() {
    const selectedSymptoms = [];
    const checkboxes = document.querySelectorAll('input[name="symptom"]:checked');
    checkboxes.forEach(cb => selectedSymptoms.push(cb.value));

    const feverLevel = document.getElementById('FC').value;
    const coughType = document.getElementById('CT').value;
    const headacheLevel = document.getElementById('HS').value;

    let resultText = `📝 Selected Symptoms: ${selectedSymptoms.join(', ')}\n`;
    let suggestions = []; // Store suggestions separately

    // Condition for fever
    if (selectedSymptoms.includes("fever") && feverLevel) {
        resultText += `🔥 Fever Severity: ${feverLevel}\n`;
        if (feverLevel >= 101) {
            suggestions.push("⚠️ High fever detected, consider medical attention!");
        } else if (feverLevel >= 100) {
            suggestions.push("🧐 Moderate fever, keep monitoring.");
        } else {
            suggestions.push("😊 Low fever, rest and hydrate.");
        }
    } else if (selectedSymptoms.includes("fever") && !feverLevel) {
        resultText += `⚠️ Fever severity level is required!\n`;
    }

    // Condition for cough
    if (selectedSymptoms.includes("cough") && coughType) {
        resultText += `😮‍💨 Cough Type: ${coughType}\n`;
        if (coughType.toLowerCase() === "dry") {
            suggestions.push("🤧 Dry cough, possibly viral infection.");
        } else if (coughType.toLowerCase() === "wet") {
            suggestions.push("🤒 Wet cough, possible respiratory infection.");
        } else {
            suggestions.push("😷 Unclear cough type, please clarify.");
        }
    } else if (selectedSymptoms.includes("cough") && !coughType) {
        resultText += `⚠️ Cough type is required!\n`;
    }

    // Condition for headache
    if (selectedSymptoms.includes("headache") && headacheLevel) {
        resultText += `🤕 Headache Severity: ${headacheLevel}\n`;
        if (headacheLevel >= 7) {
            suggestions.push("⚠️ Severe headache, consider taking pain relief or seeing a doctor.");
        } else if (headacheLevel >= 4) {
            suggestions.push("😖 Moderate headache, rest and stay hydrated.");
        } else {
            suggestions.push("😊 Mild headache, try some relaxation techniques.");
        }
    } else if (selectedSymptoms.includes("headache") && !headacheLevel) {
        resultText += `⚠️ Headache severity level is required!\n`;
    }

    // If no symptoms are selected
    if (selectedSymptoms.length === 0) {
        resultText = "⚠️ No symptoms selected!";
    }

    // Update the result section with the symptoms
    document.getElementById("result").innerText = resultText;

    // Display the suggestions separately (if any)
    if (suggestions.length > 0) {
        document.getElementById("suggestions").innerText = suggestions.join('\n');
    } else {
        document.getElementById("suggestions").innerText = "";
    }
}
