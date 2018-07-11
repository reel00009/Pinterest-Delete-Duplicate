//  Initialize once with app id
PDK.init({ appId: '4976224077197881480', cookie: true });

// Pinterest log in
function logIn() {
  PDK.login(function(response){
    console.log(response);
  })
}

// Determine auth state of the user
function loggedIn() {
  return !!PDK.getSession();
}

// Pinterest log out
function logOut(){
  PDK.logout();
}

// Return's the  authorized user’s profile, boards and pins
function userInfo(){
  PDK.me();
}

// Request a search for User's boards
function myBoards(callback) {
  PDK.me('boards', { fields: 'id,name,image[small]' }, callback);
}

// Return description and image of the pin
var params = {
  fields: 'note,image'
};

// Retrieve pins on the board
var pins = [];
var pinCount = 0;
function getPins(data, callback) {
  PDK.request('/boards/Techies/pins', 'GET', function (response) { // TEMP BOARD : Techies
    if (!response || response.error) {
      alert('Error occurred');
    } else {
      pins = pins.concat(response.data);
      console.log(pins); // TEST to see if pins are showing up
      pinCount++;
      if (response.hasNext) {
        response.next(); // this will recursively go to this same callback
      }
    }
  });
}

// Find duplicate pins
function findDupPins(data) {
  for(int i = 0; i < pinCount; i++){
    for(int j = 0; j < pinCount; j++){
      if(j != i) {
        if(pin[i]==pin[j]){
          deletePin(pin[i], function(response));
        }
      }
    }
  }
}

// Deleting a pin
function deletePin(data, callback) {
  PDK.request('/pins/', 'DELETE', data, callback);
}
