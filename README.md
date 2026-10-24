# @x12i/analytix-dashboard usage example

Dashboard definitions and a runner that combines analytic widgets into one execution result.

This consuming application demonstrates **assemble a dashboard and isolate one failed widget** using the published npm package, pinned to `1.0.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Execute several analytic widgets as one dashboard.
- Apply a widget failure policy while assembling dashboard results.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/analytix-dashboard)
- [Implementation monorepo](https://github.com/x12i/analytix)
- [Reviewed package source](https://github.com/x12i/analytix/tree/cf2ed708652df6f853af877340acc385d17c76f2/packages/analytix-dashboard)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The definitions, outputs, callers, and source data are authored fixtures. Storage is in memory, and model assignment/resolution never invokes a provider. The function example executes only the source written in this repository; the package's Node VM mode is not a security boundary for untrusted code. The service authentication example inspects the demo/default hook and does not constitute a production authentication setup.
