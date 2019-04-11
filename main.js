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
                //console.log("Don't try and break it");
            } else {
                var priority = prompt("What is the priority?", "Type Here");
                if (priority == null || priority == "") {
                    //console.log("Don't try and break it");
                } else {
                    dict[task] = priority +"," + time + "," + minutes + "," + "false";
                   // console.log(localStorage.dict);
                   // console.log("end of adding");
                    
                    listMaker();
                    
                   // console.log(localStorage.dict);
                   // console.log("end of load list");
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
        var print_string = ('<table style="width: 100%"><tr><th>Number</th><th>Task</th><th>Priority</th><th>Hours</th><th>Minutes</th></tr>');
        var counter = 1;
        for (var key in dict) {
            print_string += "<tr>";
            new_string_list += key + " " + dict[key] + "<br>";
            var temporary_list = fix_string_list(dict[key]);
            console.log(temporary_list[2]);
            print_string += "<td>" + counter + "</td><td>" + key + "</td><td>" + temporary_list[0] + "</td><td>" + temporary_list[1] + "</td><td>" + temporary_list[2] + "</td>";
            counter++;
            print_string += "</tr>";
        }
        print_string += "</table >";
        localStorage.dict = new_string_list;

        document.getElementById("list").innerHTML = print_string;
        
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
    //console.log(dict)
}

function fix_string_list(strings) {
    return strings.split(',');
}

function priority() {
    var order_list = [];
    for (var item in dict) {
        order_list.push(Array(item, parseInt(fix_string_list(dict[item])[0], 10), parseInt(fix_string_list(dict[item])[1], 10), parseInt(fix_string_list(dict[item])[2],10)));
            }
    order_list = order_list.sort(Comparator);
    //console.log(order_list);
    tablizer(order_list);
}

function Comparator(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
}

function tablizer(list) {
    if (typeof (Storage) !== "undefined") {

       
        var print_string = ('<table style="width: 100%"><tr><th>Task</th><th>Priority</th><th>Hours</th><th>Minutes</th></tr>');
       
        for (var i = 0; i < list.length - 1; i++) {
            print_string += "<tr>";
            print_string += "<td>" + list[i][0] + "</td><td>" + list[i][1] + "</td><td>" + list[i][2] + "</td><td>" + list[i][3] + "</td>";
            
            print_string += "</tr>";
        }
        print_string += "</table >";
        

        document.getElementById("list").innerHTML = print_string;

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}