// JavaScript source code
function test() {
    console.log("test worked")

}

var dict = {
    Test1: Array(1, 2, 30, false),
    Test2: Array(2, 1, 30, false),
    Test3: Array(4, 0, 30, false),
    Test4: Array(3, 3, 0, false)
}

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function listMaker() {
    if (typeof (Storage) !== "undefined") {
        
        var new_string_list = "";
        for (var key in dict) {
            new_string_list += key + " " + dict[key] + "<br>";
        }
        document.getElementById("list").innerHTML = new_string_list;
        
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}