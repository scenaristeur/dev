# dev

# source code
- https://github.com/scenaristeur/dev/

# demo
- https://scenaristeur.github.io/dev/

# projects
- https://github.com/scenaristeur/dev/projects

# commits
- https://github.com/scenaristeur/dev/commits/main


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# gun
```
// Get ready for gunishment
var gun = Gun(‘https://gunjs.herokuapp.com/gun');

// Reference a random object and save data to it
gun.get('random/zfn5sQLy4')
.put({ hello: ‘world’ });


    // Reference an object
    var ref = gun.get('random/zfn5sQLy4');

    // Print the ref
    ref.on(function(data) {
       $('body').text(JSON.stringify(data));
    });

```
