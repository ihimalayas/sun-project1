# 跨平台Flutter项目开发指南

## 项目概述
本项目使用Flutter框架构建跨平台应用，支持macOS、Windows、iOS、Android和Web平台。同时包含自建后台服务器实现。

## 技术选型

### 客户端
- **框架**: Flutter 3.x
- **语言**: Dart
- **状态管理**: Provider/Riverpod
- **UI组件库**: Flutter Material/Cupertino

### 服务端
- **选项1**: Node.js + Express (适合JavaScript生态)
- **数据库**: PostgreSQL (推荐用于图书管理系统，支持ISBN、作者等结构化数据查询，提供JSON支持和全文搜索功能)

## 开发环境准备
1. 安装Flutter SDK
   - 验证安装: `flutter doctor`
   - 确保Flutter SDK路径已添加到PATH环境变量
2. 安装对应平台的开发工具
   - macOS: Xcode (通过App Store安装)
   - Windows/Android: Android Studio
   - 验证安装: `flutter doctor --android-licenses`
3. 配置Dart环境
   - 验证Dart SDK: `dart --version`
4. 安装IDE插件
   - VS Code: 安装Flutter和Dart插件
   - Android Studio: 安装Flutter插件
   - 验证插件: 创建新Flutter项目测试功能

```bash
# 验证Flutter环境
flutter --version

# 验证Xcode安装
xcode-select --print-path

# 验证Dart环境
dart --version
```
> 根据检查结果，开发环境准备工作如下：
1. Flutter SDK ：已安装(版本3.29.2)
2. Xcode开发工具 ：已安装(路径:/Applications/Xcode.app/Contents/Developer)
3. Dart环境 ：已配置(版本3.7.2)

## 项目结构

project/
├── client/         # Flutter客户端代码
├── server/         # 后端服务代码
├── shared/         # 共享代码(如模型定义)
└── README.md       # 项目文档
```

已完成Flutter客户端项目和Node.js服务端项目的初始化工作：

1. Flutter客户端项目
   flutter create client
   - 已在client目录下成功创建Flutter项目
   - 自动生成了130个基础文件
   - 项目结构包含lib/main.dart入口文件
   - 所有依赖已自动安装完成
2. Node.js服务端项目
   npm init -y
   npm install express --save
   - 在server目录下初始化了package.json
   - 已安装Express作为核心依赖
   - 共添加了66个相关依赖包
两个项目都保持了清晰的目录结构，可以开始进行后续开发。Flutter项目可通过 flutter run 启动，Node.js服务可通过创建index.js文件后使用 node index.js 运行。


## 常见问题

### Q: 如何解决平台特定功能需求？
A: 使用Flutter的Platform Channels机制调用原生代码

### Q: 如何实现Web兼容？
A: 使用Flutter for Web，注意避免使用不支持的插件

## 开发流程
1. 设计UI原型
2. 实现核心业务逻辑
3. 开发平台特定功能
4. 集成后端API
5. 多平台测试
6. 性能优化

## 部署方案
- 移动端: 发布到App Store/Google Play
- 桌面端: 打包为平台特定安装包
- Web端: 部署到静态网站托管服务
- 服务端: 部署到云服务器或容器平台

## GitHub同步步骤
1. 在GitHub上创建新仓库
   - 登录GitHub账号
   - 点击右上角"+" → "New repository"
   - 输入仓库名"sun-project1"
   - 选择公开(Public)
   - 不勾选"Initialize this repository with a README"

2. 本地Git操作
```bash
# 初始化本地仓库(如果未初始化)
git init

- 检查.git目录 在项目根目录下查看是否存在 .git 隐藏文件夹，这是Git仓库的标志。
- 使用git status命令，如果显示"fatal: not a git repository"则表示未初始化，如果显示文件状态则表示已初始化。

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库(替换YOUR_USERNAME)
git remote add origin https://github.com/ihimalayas/sun-project1.git

➜  sun-project1 git:(main) git remote add origin https://github.com/ihimalayas/sun-project1.git
error: remote origin already exists.
首先需要移除现有的origin远程配置，以便重新添加正确的远程仓库URL。
git remote remove origin
现在需要添加正确的远程仓库URL。
git remote add origin https://github.com/ihimalayas/sun-project1.git

# 推送代码到GitHub
git push -u origin main
```

3. 后续更新代码
```bash
git add .
git commit -m "your commit message"
git push
```