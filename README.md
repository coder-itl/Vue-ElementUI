###   参数解析

+ `package.json`文件中`devDependencies`和`dependencied`的区别

  ```bash
  dependencies 依赖的意思,这些安装包都是程序所依赖的包,需要发布到生产环境的
  
  dev 即 develop 开发的意思,也就是开发环境下的依赖
  
  Eg:
  	安装到开发环境 npm axios --save-dev
  	安装到生产环境 npm axios --save
  	
  区别:
  	devDependencies 中的插件只用于开发环境,不用于生产环境,而 dependencies 是要发布到生产环境的,比如 babel 有关的转换 es6 到 es5 的依赖只是开发环境下转化用,生产过程中是用不到的，所以只用写在 devDependencies 中,而像 Vue 或 element-ui 这种实际运行会调用的,得写在 dependencies 中
  ```

  

###  项目准备

+ `element-ui`

  + 安装

    ```bash
    npm install element-ui --save
    ```

  

+ 二级路由配置与使用

  ```javascript
  
  ```

  



