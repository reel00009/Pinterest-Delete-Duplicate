# Pinterest-Delete-Duplicate
An application that deletes duplicate pins on Pinterest

Try out the Pinterest Delete Duplicate application [here](https://tiananguyen.github.io/pinterest/main.html).

## Application Process
This application will use the Pinterest developer API and Pinterest JavaScript SDK to:
  1. Look through a user's Pinterest board
  2. Find duplicate pins in the board requested
  3. Delete the duplicate pins to ensure each pin on the board is unique

## Application Functions
Here are the methods being used in this application:

|     Code      |    Response   |  Description  |
| ------------- | ------------- | ------------- |
| `PDK.login({ scope : 'write_public, read_public' })`  |  { accessToken }  |  Opens an oauth login popup |
| `PDK.logout()`  |  none | Deletes the session |
| `PDK.request('/v1/pins/' + response.data[j].id + '/', 'DELETE', data, callback);` |  none | Deletes the pin object
| `PDK.me({ fields: 'username' })`  | { data: url, id, username } | Gets the current user's username |
| `PDK.request('/boards/'+ user_id +'/'+ board_id +'/', { fields: 'id,name,url' })` | { data: id, name, url } | Gets the current user's board information |
| `PDK.request('/boards/'+ user_id +'/'+ board_id +'/pins/', {fields: 'note,image[small]'})` |  { data: id, note, image[small] } | Gets the current user's board's pins |
