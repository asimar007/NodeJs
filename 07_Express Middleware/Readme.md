# Notes

1. we can also build Custome Header
   `res.setHeader("X-MyHeader","Asim Sk")`

use X Because it is Good Practice to have. 2. We can aslo send custom Header through Postman for that we can use

```
.get((req, res) => {
        console.log(req.headers);
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);

    })
```
