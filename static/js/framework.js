/*
    Handles both global variables and event handlers for the buttons.  Anything that involves the user interface framework should go in here.
*/

//  ================  GLOBAL VARIABLES  ================

socket = io();
output();               //  I THINK THIS WORKS

//  ================  BUTTON HANDLERS  ================

//  When a ship button is clicked, call select with the appropriate ship passed

$('#anj_button').click(function(){
    var shipType = '[Anjelita selected]';
    select(shipType);
    showShip(shipType)
});

$('#har_button').click(function() {
    var shipType = '[Hartley selected]';
    select(shipType);
    showShip(shipType)
});

$('#ber_button').click(function() {
    var shipType = '[Bernkastel selected]';
    select(shipType);
    showShip(shipType)
});

$('#ver_button').click(function() {
    var shipType = '[Veronica selected]';
    select(shipType);
    showShip(shipType)
});

//  When an action is clicked, call the appropriate function

$('#atk_button').click(function() {
    var actType = '[Attack selected]';
    action(actType);
});

$('#repres_button').click(function() {
    var actType = '[Repair & Restock selected]';
    action(actType);
});

$('#repo_button').click(function() {
    var actType = '[Reposition selected]';
    action(actType);
});

$('#pldr_button').click(function() {
    var actType = '[Plunder selected]';
    action(actType);
});

$('#spec_button').click(function() {
    var actType = '[Special selected]';
    action(actType);
});

//  ================  UPDATE HANDLERS  ================

function displayMessage(msg) {
    socket.emit('dispMsg', {
        content: msg,
    });
}

function output() {
    socket.on('dispMsg', function(msg) {
        console.log("Message received");
        $('#display').append(msg.content + '\n');
    });
}

function showShip(shipName) {
    var newName = shipName.replace('[','').replace(']','').split(' ')[0];
    $('#shipContainer > img').each(function () {
        $(this).removeClass('show');
    });

    $('#' + newName).addClass('show');
}
