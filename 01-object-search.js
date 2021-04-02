// Minutes of Javascript #01 - Switch statement vs Object Search
// See: https://playcode.io/609280/
function handleSuccess(){}
function handleUnauthorized(){}
function handleNotFound(){}
function handleUnknownError(){}
const status = 200;

// Switch statement
switch (status) {
    case 200:
        handleSuccess()
        break
    case 401:
        handleUnauthorized()
        break
    case 404:
        handleNotFound()
        break
    default:
        handleUnknownError()
        break
}

// Equivalent using object key search in O(1) time
const hashmap = {
    200: handleSuccess,
    401: handleUnauthorized,
    404: handleNotFound,
    default: handleUnknownError
};
const hashmapResult = hashmap.hasOwnProperty(status) ? hashmap[status] : hashmap.default;
console.info(hashmapResult());