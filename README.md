# crypto
Encrypt and decrypt object or array date with password 

# installation
yarn add @creatrix/crypto

or

npm i @creatrix/crypto

# example
import crypto from @creatrix/crypto;

const {EncryptData,DecryptData}=useCrypto();

const encrypteddata=EncryptData({id:'1',value:''2},MYPASSWORD) //...........

DecryptData(encrypteddata,MYPASSWORD) //{id:'1',value:''2}
