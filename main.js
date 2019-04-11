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


function addTaks() {
    var task = prompt("What is the task?", "Type Here");
    if (task == null || task == "") {
        console.log("Don't try and break it");
    } else {
        var time = prompt("What is the time to complete the task in hours?", "Type Here");
        if (time == null || time == "") {
            console.log("Don't try and break it");
        } else {
            var minutes = prompt("What is the time to complete the task in minutes?", "Type Here");
            if (minutes == null || minutes == "") {
                console.log("Don't try and break it");
            } else {
                var priority = prompt("What is the priority?", "Type Here");
                if (priority == null || priority == "") {
                    console.log("Don't try and break it");
                } else {
                    dict[task] = Array(priority, time, minutes, false);
                }
            }
        }
    }
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
        localStorage.dict = new_string_list;

        document.getElementById("list").innerHTML = new_string_list;
        
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function remover() {
    var txt;
    var item = prompt("Please enter the list number you wish to delete:", "#");
    if (item == null || item == "") {
        txt = "User cancelled the prompt.";
    } else {
        var counter = 1;
        for (var prop in dict) {
            console.log(counter);
            console.log(item);
            console.log(counter == parseInt(item, 10));
            if (counter == parseInt(item, 10)) {
                console.log("removing the item");
                delete dict[prop];
            }
            counter += 1;
        }
    }
    listMaker();
}

function loadList() {
    var temp_list2 = [];
    var temp_list = localStorage.dict.split('<br>');
    //console.log(temp_list);
    make_dict(printList(temp_list));
    
}

function printList(t_list) {
    var new_list = [];
    for (var i = 0; i < t_list.length; i++) {
        //console.log(t_list[i]);
        var temp_item = t_list[i].split(' ');
        //console.log(temp_item);
        new_list.push(temp_item);
    }
    return new_list;
}

function make_dict(l) {
    dict = {};
    for (var i = 0; i < l.length-1; i++) {
        if (l.length > 0) {
            dict[l[i][0]] = l[i][1];
        }
    }
    console.log(dict)
}