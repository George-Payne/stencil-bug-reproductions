To reproduce:

1. `npm install`
2. `npm run build`

Observe:

```
[01:16.3]  @stencil/core
[01:16.6]  v2.17.4 🐞
[01:18.8]  build, example, prod mode, started ...
[01:18.8]  transpile started ...
[01:21.8]  transpile finished in 2.95 s
[01:21.8]  copy started ...
[01:21.8]  generate lazy started ...
[01:21.8]  copy finished (0 files) in 38 ms
[01:22.7]  generate lazy finished in 968 ms

[ WARN  ]  Package Json: package.json
           package.json "module" property is required when generating a distribution.

[01:22.7]  build finished in 3.95 s
```

4. Note the warning
