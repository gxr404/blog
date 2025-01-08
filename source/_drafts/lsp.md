LSP-language-server-protocol语言服务协议

协议规定 编辑器IDE与应用服务器 与  语言服务器之间的协议

该语言服务器提供了例如自动补全，转到定义，查找所有引用等的功能；
语言服务器索引格式的目标是支持在开发工具中进行丰富的代码导航或者一个无需本地源码副本的WebUI。



为什么会有LSP的一个重要原因是

例如
Eclipse CDT 插件（在 Eclipse IDE 中支持 C/C++）是用 Java 编写的，因为 **Eclipse IDE 本身是用 Java 编写的**。

按照此方法，这意味着在 Visual Studio 代码的 TypeScript 中实现 C/C++ 域模型，在 **Visual Studio 的 C# 中实现**单独的域模型。

> 这使得 vscode需要开发 golang语言相关的类如自动补全，转动定义，悬停在单词上提供文档的功能， 到了 Visual Studio又需要开发一套C#的 自动补全，转动定义，悬停在单词上提供文档的功能（完全与vscode中的一模一样的功能只是使用的开发语言不一样）

每个开发IDE，都要为语言实现类如自动补全，转动定义，悬停在单词上提供文档的功能，传统上，需要个IDE根据自己的API实现上述工作，即使是相同的功能，也要根据不同IDE实现一遍重复的功能，代码却不同。


who, when, where, how, why

- https://www.youtube.com/watch?v=LaS32vctfOY
- https://github.com/ndonfris/fish-lsp
- https://juejin.cn/post/6920081728300302350
