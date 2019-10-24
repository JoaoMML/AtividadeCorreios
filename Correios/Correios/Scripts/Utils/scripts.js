$(document).ready(function () {
    $('#botaoCalc').click(function () {
        var obj = {
            nCdEmpresa: "",
            sDsSenha: "",
            sCepOrigem: $("#cepReme").val(),
            sCepDestino: $("#cepDest").val(),
            nVlPeso: $("#peso").val(),
            nCdFormato: $("#formato").val(),
            nVlComprimento: $("#comprimento").val(),
            nVlAltura: $("#altura").val(),
            nVlLargura: $("#largura").val(),
            sCdMaoPropria: "",
            nVlValorDeclarado: "",
            sCdAvisoRecebimento: "",
            nCdServico: "",
            nVlDiametro: $("#diametro").val()
        };

        $.post("http://usysweb.com.br/api/correiosambev.php?text", obj).done(function (data) {
            $("#valor").text("R$ " + JSON.parse(data).cServico.Valor);
            $("#dias").text(JSON.parse(data).cServico.PrazoEntrega + " Dias");
        });
    });
});