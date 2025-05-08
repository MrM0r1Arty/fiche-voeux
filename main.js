// Force reset all forms and fields when page is loaded
window.onload = function() {
    document.querySelectorAll('input, select, textarea').forEach(element => {
        if (element.type === 'text' || element.type === 'password' || element.tagName.toLowerCase() === 'textarea') {
            element.value = '';
        } else if (element.tagName.toLowerCase() === 'select') {
            element.selectedIndex = 0;
        }
    });
};

let currentUser = {};

// Find the user based on matricule and password
function findUser() {
    const inputMatricule = document.getElementById("matricule").value.trim();
    const inputPassword = document.getElementById("password").value.trim();

    const user = usersDatabase.find(u => u.matricule === inputMatricule);

    if (user) {
        const expectedPassword = user.moyenne_bac.replace(".", "").substring(0, 4);

        if (inputPassword === expectedPassword) {
            currentUser = user;

            // Fill English fields
            document.getElementById("nom_en").value = user.nom_fr;
            document.getElementById("prenom_en").value = user.prenom_fr;
            document.getElementById("lieu_en").value = user.lieu_naissance;
            document.getElementById("date_en").value = user.date_naissance;

            // Fill Arabic fields
            document.getElementById("nom_ar").value = user.nom_ar;
            document.getElementById("prenom_ar").value = user.prenom_ar;
            document.getElementById("lieu_ar").value = user.lieu_naissance;
            document.getElementById("date_ar").value = user.date_naissance;

            // Fill Bac Average
            document.getElementById("moyenne_en").value = user.moyenne_bac;
            document.getElementById("moyenne_ar").value = user.moyenne_bac;

            document.getElementById("step1").classList.remove("active");
            document.getElementById("step2").classList.add("active");
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Matricule not found.");
    }
}

// Handle yes/no confirmation after showing info
function handleConfirmation(radio) {
    const confirmButton = document.getElementById("nextStep2");
    const correctionBox = document.getElementById("correctionBox");
    const correctionText = document.getElementById("correctionText");

    if (radio.value === "yes") {
        correctionBox.style.display = "none";
        confirmButton.disabled = false;
    } else if (radio.value === "no") {
        correctionBox.style.display = "block";
        correctionText.addEventListener('input', function() {
            confirmButton.disabled = correctionText.value.trim().length === 0;
        });
    }
}

// Step navigation
document.getElementById("nextStep1").addEventListener("click", findUser);

document.getElementById("nextStep2").addEventListener("click", () => {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step3").classList.add("active");
});

document.getElementById("nextStep3").addEventListener("click", () => {
    document.getElementById("step3").classList.remove("active");
    document.getElementById("step4").classList.add("active");
});

// Send data to Google Sheets
async function submitToGoogleSheet(data) {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwQ-pIDEhHl_xjdv-0TxVdQPTzPhxief9fZmRTYDh6agkgAc-O4W9HzuHY31KVVr-Le/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}

// Email confirmation and final submit
document.getElementById("submitForm").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();

    if (email !== confirmEmail) {
        alert("Emails do not match. Please verify.");
        return;
    }

    const formData = {
        matricule: currentUser.matricule,
        firstName: currentUser.prenom_fr,
        lastName: currentUser.nom_fr,
        choice1: document.getElementById("choix1").value,
        choice2: document.getElementById("choix2").value,
        choice3: document.getElementById("choix3").value,
        choice4: document.getElementById("choix4").value,
        choice5: document.getElementById("choix5").value,
        email: email
    };

    const result = await submitToGoogleSheet(formData);

    if (result.status === "already_submitted") {
        alert("You have already submitted your form.");
    } else if (result.status === "success") {
        document.getElementById("step4").classList.remove("active");
        document.getElementById("step5").classList.add("active");
    } else {
        alert("An error occurred while submitting. Please try again.");
    }
});

// ----------------------------
// Dropdown Management Section
// ----------------------------

const allChoices = [
    "Food Sciences - علوم الأغذية",
    "Biotechnology - التكنولوجيا الحيوية",
    "Biological Sciences - العلوم البيولوجية",
    "Ecology and Environment - علم البيئة والبيئة",
    "Agronomic Sciences - العلوم الزراعية",
    "Marine and Freshwater Hydrobiology - الهيدرولوجيا البحرية والقارية"
];

const selectIds = ["choix1", "choix2", "choix3", "choix4", "choix5"];

function updateSelectOptions() {
    const selectedValues = selectIds.map(id => document.getElementById(id).value).filter(v => v !== "");

    selectIds.forEach(currentId => {
        const select = document.getElementById(currentId);
        const currentValue = select.value;

        select.innerHTML = '<option value="" disabled selected hidden>-- Select a choice / اختر رغبة --</option>';

        allChoices.forEach(choice => {
            if (!selectedValues.includes(choice) || choice === currentValue) {
                const option = document.createElement("option");
                option.value = choice;
                option.textContent = choice;
                select.appendChild(option);
            }
        });

        select.value = currentValue;
    });
}

selectIds.forEach(id => {
    document.getElementById(id).addEventListener("change", updateSelectOptions);
});
