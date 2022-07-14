# restaurant
### 系统介绍
<p>该项目包含该西餐厅管理系统的前端界面。<br>
  该西餐厅管理系统的主要是针对前来餐厅食客就餐的流程，并针对这些流程设计的信息系统。
  首先客人进店后服务员根据人数选定餐台，随后点餐，根据客人所需餐品下单。
  在这里客人可以选择单点也可以选择套餐，套餐内也提供给了客人一些适度选择的空间。
  在客人完成点单后，生成订单，并发送给后厨，后厨据此制作餐品。
  客人完成就餐后，根据订单金额和相关折扣，买单离开，此时订单完成，系统自动统计营业额。
  该系统还设置了权限，不同工作岗位的系统操作着者有不同的系统操作权限。
</p>

### 系统使用技术栈
<p>
 该系统使用的是vue、node.js、vue-router、axios、elementUI等技术栈。
</p>

### 本人负责部分
<p>
前端所有界面的设计与实现及系统测试。
</p>

### 系统的实现
##### 登录界面
![图片](https://user-images.githubusercontent.com/87765193/178686448-5753f1b1-5ae2-4eae-8758-24dfea66eb71.png)
<br>
##### 点餐界面
桌子状态不同时显示不同的图片，点击点餐时弹出对话框进行桌号的确认和人数的选择，按确认后进入菜品选择界面
![图片](https://user-images.githubusercontent.com/87765193/178688161-e9833866-b594-4528-90f7-27d557fb96b8.png)
<br><br>
根据不同菜品种类可选择对应的菜品界面，可进行对菜品进行选择、增加数量、减少数量和规格选择等。
![图片](https://user-images.githubusercontent.com/87765193/178687135-3c910c09-8a4d-40c1-8daa-60c87543fe00.png)
<br>
##### 订单查看界面
可查看未结账、已结账、挂账、全部订单的详细信息，也实现查看报表功能
![图片](https://user-images.githubusercontent.com/87765193/178689123-12adb1e4-845d-49f8-a545-3b028ba6ef5e.png)
![图片](https://user-images.githubusercontent.com/87765193/178689375-38b5e73e-1b9d-40dc-b500-1600f20ece84.png)
<br>
##### 后厨界面
按时间顺序和菜品种类显示未完成的菜品，点击完成按钮可实现待完成菜品的数量减一。
![图片](https://user-images.githubusercontent.com/87765193/178689456-9d66c989-d3ce-438f-ac99-5cb30956c02d.png)
<br>
##### 管理界面
可进行对菜品和员工的增删查减的管理。
![图片](https://user-images.githubusercontent.com/87765193/178689763-7bf1229f-7ae6-426b-9cc2-b966dc8708d0.png)
![图片](https://user-images.githubusercontent.com/87765193/178689791-a15fde82-d359-4268-8034-b6bc63c90de7.png)

