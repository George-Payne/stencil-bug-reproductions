To reproduce:

1. `npm install`
2. `npm run build`

Observe:

```
[43:55.6]  @stencil/core
[43:55.8]  v2.14.2 😃
[43:57.4]  build, custom-target-example, prod mode, started ...
[43:57.4]  transpile started ...
[43:59.6]  transpile finished in 2.21 s
[43:59.6]  copy started ...
[43:59.6]  generate lazy started ...
[43:59.8]  copy finished (0 files) in 178 ms
[44:00.4]  generate lazy finished in 820 ms
-----> Running docs custom output target <-----
[44:00.4]  generating custom output target started ...
-----> Running custom output target <-----
[44:00.4]  generate custom output target finished in 1 ms
[44:00.5]  build finished in 3.10 s
```

3. `npm run dev`

Observe:

```
[44:49.3]  @stencil/core
[44:49.5]  v2.14.2 😃
[44:51.2]  build, custom-target-example, dev mode, started ...
[44:51.2]  transpile started ...
[44:53.2]  transpile finished in 2.00 s
[44:53.2]  copy started ...
[44:53.2]  generate lazy started ...
[44:53.3]  copy finished (0 files) in 30 ms
[44:53.6]  generate lazy finished in 396 ms
[44:53.8]  build finished in 2.59 s
```

4. Note that `custom-target-example` is listed as an output, but is never run
