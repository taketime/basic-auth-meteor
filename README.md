Basic Auth header parser for Meteor
=======

The lovely [basic auth](https://github.com/jshttp/basic-auth) header parser, but for Meteor.

Used exactly the same way as basic-auth. Pass a request object to `auth`. If it contains a valid Authoriztion header, it'll be parsed and returned as an object that looks like `{ name: 'someusername', pass: 'somepass' }`. If the header isn't valid, it'll return `undefined`.

```js
var credentials = auth(req);
```
