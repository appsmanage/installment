var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var frequency = $('[name="frequency"] option:selected').val();
        var BTCamountBF = $('input[name="BTCamountBF"]').val();
        var ETHamountBF = $('input[name="ETHamountBF"]').val();
        var XRPamountBF = $('input[name="XRPamountBF"]').val();
        
        var msg = `${key}\n積立頻度：${frequency}\n(bitFlyer)\nBTC：${BTCamountBF}\nETH：${ETHamountBF}\nXRP：${XRPamountBF}`;
        sendText(msg);

        return false;
    });
});
