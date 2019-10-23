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
            nVlValorDeclarado:"",
            sCdAvisoRecebimento:"",
            nCdServico:"",
            nVlDiametro: $("#diametro").val()
        };

        $.post("http://usysweb.com.br/api/correiosambev.php?text", obj, function (data) {
            alert(JSON.parse(data).cServico.Valor);
            alert(JSON.parse(data).cServico.PrazoEntrega);

            //alert("#valor").text("R$ " + JSON.parse(data).cServico.Valor);
            //alert("#prazo").text(JSON.parse(data).cServico.PrazoEntrega + " Dias");
        });
    });
});