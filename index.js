var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var username = $('input[name="username"]').val();
        var email = $('input[name="email"]').val();
        var frequency = $('[name="frequency"] option:selected').val();
        var btcbf = $('input[name="BTCamountBF"]').val();
        var ethbf = $('input[name="ETHamountBF"]').val();
        var xrpbf = $('input[name="XRPamountBF"]').val();
        var apikye = $('input[name="apikey"]').val();
        var apisecret = $('input[name="apisecret"]').val();
        
        var msg = `${key}\nお名前：${username}\nEmail：${email}\n積立タイミング：${frequency}\n(bitFlyer)\nBTC：${btcbf}円\nETH：${ethbf}円\nXRP：${xrpbf}円\nAPI KYE：********\nAPI SECRET：********`;
        sendText(msg,apikye,apisecret);

        return false;
    });
});
