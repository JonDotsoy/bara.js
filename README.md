# 🍹 bert
A task manager inspired on Gulp.

![](https://media4.giphy.com/media/3o6Zteg4iAACKsh5sI/giphy.gif)

## On Develop

Features:
- API Interfaces
- Web Interfaces
- Auth Manager (Credentials)
- Plugin Support
- Task Manager

## Framework
**Estructure of directory by features.**

- app/
    - **[feature]**/
        - [router.js](#appfeaturerouterjs): The router configs
            - [exports.router()](#exportsrouter-function): General router configuration.
            - [exports.api()](#exportsapi-function): Api router configuration.

### app/[feature]/router.js: [exports][node-modules] (Object)

#### exports.router: (*[Middleware][express-middleware]|[Router][express-router]*)
The general router to render by page.

**Example:**

```javascript
// /app/hello/router.js
exports = module.exports = {
    router: require('express')
        .Router()
        .get('/hello', (req, res) => {
            res.render('hello', {"hello":'world'})
        })
}
```

```
GET /api/hello

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello world</title>
</head>
<body>
    <h1>Hello world!!</h1>
</body>
</html>
```

#### exports.api: (*[Middleware][express-middleware]|[Router][express-router]*)
The router to api, use the base `/api`.

**Example:**

```javascript
// /app/hello/router.js
exports = module.exports = {
    api: require('express')
        .Router()
        .get('/hello', (req, res) => {
            res.json({
                ok: true,
                hello: 'world'
            })
        })
}
```

```
GET /api/hello

{
    "ok": true,
    "hello": "world"
}
```



[express-middleware]: http://expressjs.com/en/api.html#middleware-callback-function-examples "Middleware callback function examples"
[express-router]: http://expressjs.com/en/api.html#router "Router"
[node-modules]: https://nodejs.org/api/modules.html "Modules"
