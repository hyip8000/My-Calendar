import React, { Component } from 'react';
import "./AddEvent.css"

class AddEvent extends Component {

    constructor(props) {
        super(props);

    }

//JAVASCRIPT CODE GOES HERE

createClose() {
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for(i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);

    }
}

    hideClose() {
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    createCheck() {
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }


    newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Task Field Empty!");
        }
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = " ";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    }


newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("Task Field Empty!");
    }
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = " ";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;
    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";

        }
    }
}

    render() {
        return (
            <div>
                <h1>HELLO DO YOU SEE ME</h1>
                <div className="AddEvent"></div>


                <head>
                    <link href="./style.css" type="text/css" rel="stylesheet" />

                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>My Calendar</title>
                    <meta name="description" content="" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                </head>

                <body>
                    <div className="row">
                        <div className="medium-8 column"></div>
                        <h1><center>My Calendar</center></h1>
                        <h2><center>Select Date:</center></h2>
                        <form id="date-form">
                            <center>
                                <select name="Month" id="selectMonth" onChange="validate()">
                                    <option value="month">Month</option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>


                                <input id="selectDay" placeholder="Day" type="number" name="day" min="1" max="31" />
                                <select name="Year" id="selectYear">
                                    <option value="year">Year</option>
                                    <option value="2018">2018</option>
                                </select>
                            </center>
                        </form>



                        <h2><center>Select Time:</center></h2>
                        <form id="time-form">
                            <center>
                                <input type="time" id="selectTime" name="time" />
                            </center>
                        </form>


                        <div id="myDIV" className="header">
                            <h2><center>To Do List:</center></h2>
                            <center>
                                <form id="inForm">
                                    <input className="inputBox" type="text" id="myInput" placeholder="Add New Task" />
                                </form></center>
                            <button
                              onClick={(e) => this.newElement(e)}
                                //onClick= "newElement()"
                                className="addBtn"
                                type="submit"
                            >Add</button>
                        </div>

                        <ul id="myUL"></ul>

                    </div>


                    <script src="app.js"></script>
                    <script src="https://apis.google.com/js/api.js"></script>

                </body>
            </div>


        );

    }
}

export default AddEvent;