To reproduce:

1. `npm install`
2. `npm run dev`

Open in browser and view console:

```
key-0 <div>​key-0​</div>​
key-1 <div>​key-1​</div>​
key-1 null
key-2 <div>​key-2​</div>​
key-2 null
key-4 <div>​key-4​</div>​
key-4 null
key-5 <div>​key-5​</div>​
key-5 null
// etc
```

3. Note that the "new" ref is given before the previous one is nullified.
4. Same behaviour for prodution build: `npm run prod`

---

For reference, react will give null before the next ref is given:

https://jsfiddle.net/yk23w1dj/16/

```
"key-0", "DIV"
"key-1", "null"
"key-1", "DIV"
"key-2", "null"
"key-2", "DIV"
"key-3", "null"
"key-3", "DIV"

// etc
```
