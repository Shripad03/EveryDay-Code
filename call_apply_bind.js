"use strict";

let name = {
    firstName: "Shreepad",
    lastName: "Avhad",
}


let getFullName = function (town, state, country) {
    document.write(this.firstName, " ", this.lastName, town, state, country+ "\n");
}

// getFullName.call(name,"Nashik","MH","IN");
getFullName.apply(name,["Nashik","MH","IN"]);



let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",

}

getFullName.call(name2, "Nashik", "MH", "IN");
let bindMethod = getFullName.apply(name,["Pune","MH","IN"]);

bindMethod();
