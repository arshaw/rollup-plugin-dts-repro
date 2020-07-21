
This is a recreation of a bug with **rollup-plugin-dts**

First, `npm install`

Then, `npm run build`

Look at `out/combined.d.ts`

See how the nested expression `import("./options").SimpleInterface` is present. It was not fully reduced.
