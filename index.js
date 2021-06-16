var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var frequency = $('[name="frequency"] option:selected').val();
        var btcbf = $('input[name="BTCamountBF"]').val();
        var ethbf = $('input[name="ETHamountBF"]').val();
        var xrpbf = $('input[name="XRPamountBF"]').val();
        
        var msg = `${key}\n積立頻度：${frequency}\n(bitFlyer)\nBTC：${btcbf}\nETH：${ethbf}\nXRP：${xrpbf}`;
        sendText(msg);

        return false;
    });
});
