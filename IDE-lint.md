### <a name="ide">IDE工具配置</a>
 
  Visual Studio Code (简称 VSCode / VSC) 是一款免费开源的现代化轻量级代码编辑器，软件跨平台支持 Win、Mac 以及 Linux，运行流畅，并且为我们提供了丰富的扩展工具，推荐使用它作为我们前端开发的工具，接下来我们将介绍如何在VSCode内配置实时检测和一键格式化的功能。

	
### 介绍
本项目包含两部分内容：

### Code Specification
-  Javascript语言编码规范

### Tools
- editorconfig  负责编辑器统一配置
- eslint 负责静态检查
- prettier 负责格式化

- 实时检测功能配置步骤：

  1. 首先需要进入命令行工具（cmd）全局安装`fish`的`eslint`规则包，使用如下命令：

    ```shell
        $ npm i -g @ztesoft/eslint-config  --registry http://registry.npm.ztesoft.com
    ```

  2. 使用VSCode打开项目，点击VSCode右侧工具栏中的扩展选项，搜索eslint，点击安装

  3. 安装完成后重新打开VSCode即可在编写js代码时实时检测不符合规范的写法，并给出标红提示

  

- 一键格式化功能配置：

  1. 使用VSCode打开项目，点击VSCode右侧工具栏中的扩展选项，搜索prettier，点击安装

  2. 重新打开项目找到需要格式化的文件，右键选择格式化文档（快捷键：Shift+Alt+F)，即可一键解决代码中的空格、逗号、引号、单行长度等格式问题
 
- 温馨提示：以上工具的使用需要在项目的根目录中有`.eslintrc.js`和`.prettierrc`文件，如果使用fish-cli创建的项目中都会自动生成这两个文件，当然如果你已经按照上面的工具安装了fish-cli并且使用的`fish lint`命令对项目进行了检测，这时也会在你相应的目录中生成这两个文件，具体文件内容如下，请确保你的文件与此相同：



     