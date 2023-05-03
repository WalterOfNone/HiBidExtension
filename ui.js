// Initialize button with user's preferred color
let activate = document.getElementById("activate");
let addAlias = document.getElementById("addAlias");
let aliasInput = document.getElementById("aliasinput");
let aliasIDInput = document.getElementById("aliasidinput");

activate.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: alias,
    });
});

function alias() {
    chrome.storage.sync.get("aliases", ({ aliases }) => {
    console.log(aliases)
    lotItems = document.getElementById("lot-list")

    for (i = 0; i < 99; i++) {
        item = lotItems.children[1].children[i];
        idstring = item.getElementsByClassName("col-xs-4")[1].childNodes[11].textContent
        let id = parseInt(idstring.slice(10,idstring.length));
        console.log(aliases.length)
        for (ii = 0; ii < aliases.length; ii++){
            if (aliases[ii][0][0] == id) {
                item.getElementsByClassName("col-xs-4")[1].childNodes[11].textContent = "Buyer ID: " + aliases[ii][0][1]
            }
        }
    }
    });
}

addAlias.addEventListener("click", async () => {

    let old_aliases = [];
    let value = [[aliasIDInput.value, aliasInput.value]]

    await new Promise(resolve => {
        chrome.storage.sync.get(['aliases'], function(result) {
            old_aliases = result.aliases || [];
            resolve();
        });
    });

    old_aliases.push(value);

    chrome.storage.sync.set({aliases: old_aliases}, function() {
    });
});