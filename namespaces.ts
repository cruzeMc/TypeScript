(function(export){
    var key = generateSecretKey();
    function sendMessage(message){
        sendSecureMessage(message, key);
    }
    exports.sendMessage = sendMessage;
})(MessageModule);

namespace M{
    var s = "hello";
    export function f(){
        return s;
    }
}

M.f();
M.s; //Error, s is not exported