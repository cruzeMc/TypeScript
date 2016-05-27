(function () {
    var key = generateSecretKey();
    function sendMessage(message) {
        sendSecureMessage(message, key);
    }
    exports.sendMessage = sendMessage;
})(MessageModule);
var M;
(function (M) {
    var s = "hello";
    function f() {
        return s;
    }
    M.f = f;
})(M || (M = {}));
M.f();
M.s; //Error, s is not exported
//# sourceMappingURL=namespaces.js.map