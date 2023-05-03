aliases = [[0,"default"],[-1,"You should never see this"]];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ aliases });
    console.log("aliases set");
});
console.log("from the background")