### 关于绘制矩形

有那么几个api：
- rect()：只是设置矩形的路径，需要手动stroke()和fill()
- strokeRect()：直接画出一个矩形
- fillRect()：直接填充出一个矩形


### 关于stroke和fill的执行顺序带来的影响

后执行的会覆盖在之前执行的结果之上

![333](https://s2.ax1x.com/2019/10/15/K9xNXn.png)

![333](https://s2.ax1x.com/2019/10/15/K9xt6s.png)


