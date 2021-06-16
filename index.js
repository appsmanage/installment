var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var frequency = $('[name="frequency"] option:selected').val();
        var btcbf = $('input[name="BTCamountBF"]').val();
        var ethbf = $('input[name="ETHamountBF"]').val();
        var xrpbf = $('input[name="XRPamountBF"]').val();
        
        var msg = `${key}\n積立頻度：${frequency}\n(bitFlyer)\nBTC：${btcbf}円\nETH：${ethbf}円\nXRP：${xrpbf}円`;
        sendText(msg);

        return false;
    });
});
