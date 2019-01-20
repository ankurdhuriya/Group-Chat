/*
    AUTHOR : ANKUR DHURIYA
    DATE   : 
    VERSION: 1.0
    PROJECT: NODE JS GROUP CHAT
 */

var socket = io();

$(function(){

    username = prompt("ENTER USERNAME");

    $.get('/showChat',function(data,status){
        $('#chatbox').html('');

        console.log(data);

        for(x of data){

            $('#chatbox').prepend(x.name + ' : ' + x.msg + '<br>');
          console.log(x);
        }

    });

   $('#submitchat').click(function(){
        socket.emit('chat',
            {
                user : username,
                msg : $('#chatmessage').val()}
            )
   })

    $('#CLEAR').click(function(){
        $.get('/clear',function(data,status){
            $('#chatbox').html('');
        })
    });

    socket.on('chat',function(data){
       $('#chatbox').prepend(data.user + ': ' + data.msg + '<br>');
    });
});