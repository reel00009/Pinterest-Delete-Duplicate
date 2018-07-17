# Pinterest-Delete-Duplicate
An application that deletes duplicate pins on Pinterest

## Application Process
This application will use the Pinterest developer API and Pinterest JavaScript SDK to:
  1. Look through a user's Pinterest boards 
  2. Find duplicate pins in each board
  3. Delete the duplicate pins to ensure each pin on the board is unique

## Application Functions
Here are the methods being used in this application:

|     Code      |    Response   |  Description  |
| ------------- | ------------- | ------------- |
| `PDK.login({ scope : 'write_public, read_public' })`  | { accessToken }  |  Opens an oauth login popup |
| `PDK.logout()`  |  none | Deletes the session |
| `PDK.request('/pins/', 'DELETE', data, callback)` |  none | Deletes the pin object
| `PDK.me( { fields: 'username' })`  | { data: username} | Gets the current user's username |
| `PDK.request('/boards/'+ user_id +'/'+ board_id +'/pins/', { fields: 'note,image[small]' })` |  { data: note,image[small] } | Gets the current user's board's pins |
