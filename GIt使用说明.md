```javascript
git init    //初始化，把目录变成仓库
git add fileName    //把文件添加到暂存区预备上传
git commit -m 'infor'   //把暂存区的文件提交到当前分支 并且添加上传说明比如'add 2 files'  
git status  //查看仓库当前状态会告诉我什么文件被修改了  
git diff    //顾名思义就是查看每次修改的difference只是提交前修改的    
git log     //查看历史记录  

git reset --hard HEAD~版本号 //回退版本 HEAD指向当前版本
//如果不写 HEAD就可以在版本里历史中穿梭（可能会出现退出不了的情况这个时候按q）  
git reflog  //可以查看每一次命令记录(可以查看版本号)

git reset --hard 版本号     //退回到一个版本（利用版本号）  

git checkout -- fileName    //可以把暂存区的内容会退到上一次add操作的内容或者上一次commit之后的内容
```