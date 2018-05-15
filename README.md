###

* packages/angular_devkit/build_angular/src/angular-cli-files/models/webpack-configs/styles.ts

```ts
{
  test: /\.less$/,
  use: [{
    loader: 'less-loader',
    options: Object.assign({
      sourceMap: cssSourceMap,
    javascriptEnabled: true
    }, lessPathOptions)
  }]
},
```
