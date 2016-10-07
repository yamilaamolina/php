$(document).ready(function() {

    $('#formBuscar').on('submit', function(event) {
        console.log("submit");
        event.preventDefault();
        urlBase = "http://it-ebooks-api.info/v1/search/";
        titulo = $('#titulo').val();
            $.ajax({
                url: urlBase+"search/"+titulo,
                type: 'GET',
                dataType: 'json',
            })
            .done(function(data) {
                console.log("success");
                console.log(data);
                $('#resultado').find('img').attr("src",data.Books[0].Image);
                $('#resultado').find('h3').html(data.Books[0].Title);
                $('#resultado').find('p').html(data.Books[0].Description);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

    });
});
