/*
+======================={PROJECT - PRESENTATION}======================+
|                                                                     |
|Project Name    : TD DEVWEB 2 SIMPLON                                |
|service       :   S  Website                               |
|FrameWorks      : NONE                                               |
|Author          : OrbitTurner                                        |
|Official Name   : Mohamed GUEYE                                      |
|Version         : v.0.Null                                           |
|Created         : 14-Jun-2020                                        |
|Last update     : 18-Jun-2020                                        |
|Partie          : MAIN JS                                            | 
|LANGAGE UTILISE : ANGLAIS - FRANCAIS                                 |
+=====================================================================+
*/
// ==================================================================================
// --- 🔆 GLOBALS 🔆 ---
// ==================================================================================
// STARTING MAIN: Global Script Timer
var scriptStartTime = new Date();
console.log("Global Script Started at : " + scriptStartTime.getHours() + "h : "+scriptStartTime.getMinutes() + "m : " + scriptStartTime.getSeconds() + "s");
var formOk = false;

// STARTING : [INIT FUNCTIONS]
// ==================================================================================
// ---💠 SETUP OF THE FORM 💠 ---
// ==================================================================================
// FIXME
// PENDING
function initFormSet() {
    // test
    // console.log("THE FORM IS LOADED SUCCESSFULLY");
    // Hiding Blocks
    hideAllAccountBlocks();
    toogleWorkBlocks(1);
    toogleAddEmpBlocks(2);
    formOk = true; 
}
// ENDING : INIT FUNCTIONS


// STARTING [GESTION DES DIFFERENT BOUTON DU FORMULAIRE]
// ==================================================================================
// --- ⏺ ADD EMPLOYEUR BTN ⏺ ---
// ==================================================================================
// PENDING
var addNewEmpBtn = document.getElementById("addEmpBtn");
addNewEmpBtn.onclick = function () {
    // Test
        // alert("Hello Foreigner!!!");
        // alert(this.classList);
    toogleAddEmpBlocks(1, this);
}
// STARTING [GESTION DES TYPES DE COMPTES]
// ==================================================================================
// --- 🔽 SELECT OPTIONS 🔽 ---
// ==================================================================================
var selectAccountType = document.getElementById("selectTypeCompte");
selectAccountType.onchange = function() {
    let optionValue =  this.options[this.selectedIndex];
    if (this.selectedIndex === 1 && optionValue.value == "cesp") {
        // CASE CPT EPARGNE XEEWEL SIMPLE
        hideAllAccountBlocks();
        toogleXeewelBlocks(2);
    }else if (this.selectedIndex === 2 && optionValue.value == "cc") {
        // CASE CPT COURANT
        hideAllAccountBlocks();
        toogleCourantBlocks(2);
    }else if (this.selectedIndex === 3 && optionValue.value == "cb") {
        // COMPTE BLOCKED
        hideAllAccountBlocks();
        toogleCptBlBlocks(2);
    }else {
        alert("<h1>VIOLATION OF FORM - REFRESH THE PAGE</h1>");
        document.getElementById("creationClientForm").style.display = "none";
    }
}

// ==================================================================================
// --- 🔘 RADIO BUTTONS 🔘 ---
// ==================================================================================
// DONE 
// FIXME
// STATUT PRO CHOOSER
var statutProRadios = document.getElementsByName("statutPro");
var oldVal = null;
for (var i = 0; i < statutProRadios.length; i++) {
    statutProRadios[i].addEventListener('change', function() {
        // TESTING VALUES
            // SI OldVal exist
            /*(oldVal) ? console.log("oldV "+oldVal.value): null;
            if (this !== oldVal) {
                oldVal = this;
            }
            console.log("New "+this.value);*/
        // FUNCTION STEPS
        this.value === "isWorking" ? toogleWorkBlocks(2) : toogleWorkBlocks(1);
        toogleAddEmpBlocks(2);
        console.log("changed");

    });
}

// FORM CHOOSER
var formChooserRadios = document.getElementsByName("formChooser");
var oldVal = null;
for (var i = 0; i < formChooserRadios.length; i++) {
    formChooserRadios[i].addEventListener('change', function() {
        // Refresh If It was Moral
        (oldVal) && oldVal.value == "moral" ? location.reload() : null;
        // BUG IN EVENTS NOT COMMING
        // this.value === "physique" ? loadClientPhysiqueForm() : loadClientMoralForm();
        this.value === "physique" ? location.reload() : loadClientMoralForm();
    });
}
// ENDING : [BUTTON FUNCTIONS MANAGING]


// STARTING : [MANAGING REUSABLE FUNCTIONS]
// ==================================================================================
// --- 🧱 BRIQUE-FUNCS 🧱 ---
// ==================================================================================
// HIDE ALL ACCOUNT INFOS
function hideAllAccountBlocks() {
    document.getElementById("accountFeeAndNumbBlock").style.display = "none";
    document.getElementById("remunBlock").style.display = "none";
    document.getElementById("agiosBlock").style.display = "none";
    document.getElementById("dateEcheanceBlock").style.display = "none";
    document.getElementById("submitCreateClient").innerHTML = '<button class="btn btn--radius-2 btn--blue" type="submit">Register</button>';

    return true;
}

// DONE
// SHOWS OR HIDE WORK BLOCKS
function toogleWorkBlocks(option) {
    option = parseInt(option);
    let blockInfosPro = document.getElementById("infoPro");
    let blockInfosEmp = document.getElementById("infoEmployeur");
    // Toogle Options
    if(option === 1) {
        // var statutPro = document.getElementById("statutPro");
    
        // Defining the Style
        blockInfosPro.style.display = "none";
        blockInfosEmp.style.display = "none";
    
    }else if (option === 2) {
        // Show:
        blockInfosEmp.style.display = "";
        blockInfosPro.style.display = "";
    }else{
        alert("OPTION ERROR IN THE FUNCTION ToogleWB at Line 29 !\n\n REFRESH THE PAGE OR CONTACT ADMIN !!!");
        document.getElementById("creationClientForm").style.display = "none";
    }
}

// SHOWS OR HIDES CREATE EMPLOYEUR BLOCK
function toogleAddEmpBlocks(option, objet=null) {
    // Recuperation
    option = parseInt(option);
    let blockCreerEmp = document.getElementById("creerEmployeur"); 

    // Toogle Switcher
     if(option === 1) {
            if (blockCreerEmp.style.display != "none") {
                blockCreerEmp.style.display = "none";
                if (objet) {
                    objet.classList.remove("optionIcon-onUse");
                    objet.classList.remove("fa-times");
                    objet.classList.add("fa-plus-circle");
                }
            }else{
                blockCreerEmp.style.display = "";
                if (objet) {
                    objet.classList.remove("fa-plus-circle");
                    objet.classList.add("fa-times");
                    objet.classList.add("optionIcon-onUse");
                }
            }
     } else {
        blockCreerEmp.style.display = "none";
     }
}

// PENDING
// Toogle Options For Compte XeeWeul 2 For Show
function toogleXeewelBlocks(option){
    option = parseInt(option);
    let blockAccountFeeNumb = document.getElementById("accountFeeAndNumbBlock");
    let blockRemun = document.getElementById("remunBlock");
    // Toogle Options
    if(option === 1) {
        // Defining the Style
        blockAccountFeeNumb.style.display = "none";
        blockRemun.style.display = "none";
    
    }else if (option === 2) {
        // Show:
        blockAccountFeeNumb.style.display = "";
        blockRemun.style.display = "";
    }else{
        alert("OPTION ERROR IN THE FUNCTION ToogleWB at Line 29 !\n\n REFRESH THE PAGE OR CONTACT ADMIN !!!");
        document.getElementById("creationClientForm").style.display = "none";
    }
}

// PENDING
// Toogle Options For Compte Courant 2 For Show
function toogleCourantBlocks(option){
    option = parseInt(option);
    let blockAgios = document.getElementById("agiosBlock");
    // Toogle Options
    if(option === 1) {
        // hide
        blockAgios.style.display = "none";
    
    }else if (option === 2) {
        // Show:
        blockAgios.style.display = "";
    }else{
        alert("OPTION ERROR IN THE FUNCTION ToogleWB at Line 29 !\n\n REFRESH THE PAGE OR CONTACT ADMIN !!!");
        document.getElementById("creationClientForm").style.display = "none";
    }
}

// PENDING
// Toogle Options For Compte Courant 2 For Show
function toogleCptBlBlocks(option) {
    option = parseInt(option);
    let blockAccountFeeNumb = document.getElementById("accountFeeAndNumbBlock");
    let dateEchBlock = document.getElementById("dateEcheanceBlock");
    // Toogle Options
    if(option === 1) {
        // hide
        blockAccountFeeNumb.style.display = "none";
        dateEchBlock.style.display = "none";
    
    }else if (option === 2) {
        // Show:
        blockAccountFeeNumb.style.display = "";
        dateEchBlock.style.display = "";
    }else{
        alert("OPTION ERROR IN THE FUNCTION ToogleWB at Line 29 !\n\n REFRESH THE PAGE OR CONTACT ADMIN !!!");
        document.getElementById("creationClientForm").style.display = "none";
    }
}

// LOAD CLIENT PHYSIQUE FORM
// FIXME : obj.innerHTML does not includes event listeners
function loadClientPhysiqueForm() {
    //Recuperation
    var formPlace = document.getElementById("clientForm");

    // GET THE CLIENT FORM
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        formPlace.innerHTML = this.response;
    };

    xhr.open('GET', './view/clientPhysiqueForm.html', true);
    xhr.send();
}

function loadClientMoralForm() {
    //Recuperation
    var formPlace = document.getElementById("clientForm");

    // GET THE CLIENT FORM
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        formPlace.innerHTML = this.response;
    };

    xhr.open('GET', './view/clientMoralForm.html', true);
    xhr.send();
}

// ENDING : [MANAGING REUSABLE FUNCTIONS]
// ==================================================================================
// --- 🔆 END 🔆 ---
// ==================================================================================
// ENDING MAIN: Global Script Timer 
var scriptEndTime = new Date();
scriptTimingMs = parseFloat(scriptEndTime.getTime() - scriptStartTime.getTime());
console.log("Global Script ENDED at : " + scriptEndTime.getHours() + "h : "+scriptEndTime.getMinutes() + "m : " + scriptEndTime.getSeconds() + "s");
console.log("Le script a mis " + scriptTimingMs/1000 + " secondes.");
