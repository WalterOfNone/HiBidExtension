lotjson = lotModels
lotItems = document.getElementById("lot-list")
console.log("injectsuccess")

for (i = 0; i < 99; i++) {
    item = lotItems.children[1].children[i];
    buyerid = lotjson[i].lotStatus.highBuyerId;    
    item.getElementsByClassName("col-xs-4")[1].appendChild(document.createTextNode("Buyer ID: " + buyerid))
}

