var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var frequency = $('[name="frequency"] option:selected').val();
        var BTCBF = $('input[name="BTCamountBF"]').val();
        var ETHBF = $('input[name="ETHamountBF"]').val();
        var XRPBF = $('input[name="XRPamountBF"]').val();
        
        var msg = `${key}\n積立頻度：${frequency}\n(bitFlyer)\nBTC：${BTCBF}\nETH：${ETHBF}\nXRP：${XRPBF}`;
        sendText(msg);

        return false;
    });
});
