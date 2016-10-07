$(document).ready(function() {
urlBase = "https://jsonplaceholder.typicode.com/";
    $.ajax({
        url: urlBase+"users",
        type: 'GET',
        dataType: 'json',
    })
    .done(function(data) {
        console.log(data);
        $.each(data, function(index, user) {
            $("#usuarios").append(
                '<tr>' +
                    '<td>' + user.id + '</td>' +
                    '<td>' + user.username + '</td>' +
                    '<td>' + user.name + '</td>' +
                    '<td>' + user.email + '</td>' +
                    '<td>' + user.website + '</td>' +
                    '<td>' + user.phone + '</td>' +
                    '<td>' + user.address.street+ ' ' + user.address.suite +'</td>' +
                    '<td>' + user.company.name + '</td>' +
                    '<td><button type="button" id="post' + user.id + '" class="btn btn-primary btn-lg posts" data-toggle="modal" data-target="#myModal">Posts</button><button type="button" id="todo' + user.id + '" class="btn btn-primary btn-lg todos" data-toggle="modal" data-target="#myModal">ToDos</button></td>' +
                '</tr>'
            );
        });
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
$('#posts').show();
    $(document).on('click','.posts', function(event) {
        event.preventDefault();
        $('#posts').show();
    });
});
