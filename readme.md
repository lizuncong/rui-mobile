React 移动端组件库

学习中。。。。。。

npm publish发布一个npm包，`.npmignore`中指定的文件不会被发布。 
默认情况下，会发布目录中的所有文件，除了 .*.swp，._*，.DS_Store，.git等文件。


如果没有.npmignore，有.gitignore，那么.gitignore中的文件也不会被发布。如果同时存在这两个文件，
则.npmignore优先级更高。

这些是默认发布的文件，即使加入.gitignore和.npmignore都是不会生效的：
package.json
README
CHANGELOG
LICENSE
