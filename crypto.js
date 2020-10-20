import CryptoJS from 'crypto-js';
const CryptoJSAesJson = {
    stringify: function (cipherParams) {
        var j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
    },
    parse: function (jsonStr) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
        return cipherParams;
    }
}
export default function useCrypto(){
    async function DecryptData(EncryptString,KeyPassword){
        try{
            return JSON.parse(CryptoJS.AES.decrypt(EncryptString, KeyPassword,{format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
        }catch{
            return "";
        }
    }

    async function EncryptData(EncryptString,KeyPassword){
        try{
            return CryptoJS.AES.encrypt(JSON.stringify(EncryptString), KeyPassword, {format: CryptoJSAesJson}).toString();
        }catch{
            return "";
        }
    }
    return {DecryptData,EncryptData};
}