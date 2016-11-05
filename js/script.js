$(function () {
    $.ajax({
        url: 'requete/listecateg.php',
        cache: false,
        success: function (result) {
            resultat = "<option></option>";
            var obj = $.parseJSON(result);
            obj.forEach(function (element) {
                resultat += '<option value="'+element.id+'">' + element.libelle + '</option>';
            });
            $("#listCateg").html(resultat);
        },
        error: function (result) {
            resultat = "ERREUR " + result;
            $("#error").html(resultat);
        }
    });

    $('#listCateg').click(function () {
        $.ajax({
            url: 'requete/listecontact.php',
            type: 'POST',
            data: 'id=' + $('#listCateg option:selected').val(),
            cache: false,
            success: function (result) {
                resultat = "";
                var obj = $.parseJSON(result);
                obj.forEach(function (element) {
                    resultat += '<tr>';
                    resultat += '<td>' + element.nom + '</td>';
                    resultat += '<td>' + element.prenom + '</td>';
                    resultat += '<td><a href="mailto:' + element.email + '">' + element.email + '</a></td>';
                    resultat += '<td><a href="tel:' + element.tel + '">' + element.tel + '</a></td>';
                    resultat += '<td>' + element.libelle + '</td>';
                    resultat += '</tr>';
                });
                $("#tableresultat").html(resultat);
            },
            error: function (result) {
                resultat = "ERREUR " + result;
                $("#error").html(resultat);
            },
        });
    });
});