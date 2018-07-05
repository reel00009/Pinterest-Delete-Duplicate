var Const = require('const');

//  Initialize once with app id
PDK.init({ appId: Const.PIN_APP, cookie: true });

//  Pinterest SDK actions
var Pinterest = {
    /*
     *  Use the SDK to log into the user's Pinterest
     *  param [Function] callback - function started when complete
     */
    login: function(callback) {
        PDK.login({ scope : Const.PIN_SCOPE }, callback);
    },
    //  Use the SDK to log out of  the user's Pinterest
    logout: function() {
        PDK.logout();
    },
    //  Use SDK to determine auth state of user
    loggedIn: function() {
        return !!PDK.getSession();
    },
    /*
     *  Use SDK to delete a duplicate Pin
     *  param [Object]   data     - {board, note, link, image_url}
     *  param [Function] callback - function started when complete
     */
    createPin: function(data, callback) {
        PDK.request('/pins/', 'DELETE', data, callback);
    },
    /*
     *  Use SDK to request user's boards
     *  param {Function} callback - function started when complete
     */
    myBoards: function(callback) {
        PDK.me('boards', { fields: Const.PIN_FIELDS }, callback);
    }
};

module.exports = Pinterest;
