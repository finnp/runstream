# runstream

Install with `npm install runstream -g`.

Run streaming node modules from the command line, where `process.stdin` will be 
the input for the stream and `process.stdout` the output. 
So it's basically doing `process.stdin.pipe(require(file)).pipe(process.stdout)`

For example if you have a streaming module that capitalizes the input, you can do:

```
$ runstream example.js
sdfjk
SDFJK
```

There is an option `--json` which allows you to use object streams. The input and ouput
will be parsed and serialised as [NDJSON](http://ndjson.org/).

Also you can omit the `.js` ending and just do `runstream example`.
