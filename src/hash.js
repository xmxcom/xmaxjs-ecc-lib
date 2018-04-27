const createHash = require('create-hash')
const createHmac = require('create-hmac')

/** @namespace hash */

/** @arg {string|Buffer} data
    @arg {string} [encoding = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when encoding is null, or string
*/
function sha1(data, encoding) {
    return createHash('sha1').update(data).digest(encoding)
}

/** @arg {string|Buffer} data
    @arg {string} [encoding = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when encoding is null, or string
*/
function sha256(data, encoding) {
    return createHash('sha256').update(data).digest(encoding)
}

/** @arg {string|Buffer} data
    @arg {string} [encoding = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when encoding is null, or string
*/
function sha512(data, encoding) {
    return createHash('sha512').update(data).digest(encoding)
}

function HmacSHA256(buffer, secret) {
    return createHmac('sha256', secret).update(buffer).digest()
}

function ripemd160(data) {
    return createHash('rmd160').update(data).digest()
}


module.exports = {
    sha1: sha1,
    sha256: sha256,
    sha512: sha512,
    HmacSHA256: HmacSHA256,
    ripemd160: ripemd160
}
