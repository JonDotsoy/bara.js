# 🍹 bert

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

### app/[feature]/router.js

#### exports.router(): *Function*
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

#### exports.api(): *Function*
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




