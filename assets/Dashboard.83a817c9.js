import{_ as a}from"./vue-schart.8d66beaa.js";import{a as e}from"./index.2adad2f1.js";import{z as t,p as l,a as s,r as d,o,c as n,f as i,t as r,w as u,h as c}from"./vendor.62413589.js";const p={name:"dashboard",components:{Schart:a},setup(){const a=JSON.parse(localStorage.getItem("ms_username")),e="admin"===name.username?"超级管理员":"普通用户";return{login:a,data:t([{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}]),options:{type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]},todoList:t([{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}]),role:e}}},g=u();l("data-v-12d0418e");const v={class:"user-info"},f=i("img",{src:e,class:"user-avator",alt:""},null,-1),h={class:"user-info-cont"},m={class:"user-info-name"},b=i("div",{class:"user-info-list"},[c(" 上次登录时间： "),i("span",null,"2019-11-01")],-1),_=i("div",{class:"user-info-list"},[c(" 上次登录地点： "),i("span",null,"东莞")],-1),w=i("div",{class:"clearfix"},[i("span",null,"语言详情")],-1),x=c(" Vue "),y=c("JavaScript "),S=c("CSS "),V=c("HTML "),I=i("div",{class:"grid-content grid-con-1"},[i("i",{class:"el-icon-user-solid grid-con-icon"}),i("div",{class:"grid-cont-right"},[i("div",{class:"grid-num"},"1234"),i("div",null,"用户访问量")])],-1),j=i("div",{class:"grid-content grid-con-2"},[i("i",{class:"el-icon-message-solid grid-con-icon"}),i("div",{class:"grid-cont-right"},[i("div",{class:"grid-num"},"321"),i("div",null,"系统消息")])],-1),L=i("div",{class:"grid-content grid-con-3"},[i("i",{class:"el-icon-s-goods grid-con-icon"}),i("div",{class:"grid-cont-right"},[i("div",{class:"grid-num"},"5000"),i("div",null,"数量")])],-1),J={class:"clearfix"},U=i("span",null,"待办事项",-1),k=c("添加"),z=i("template",null,[i("i",{class:"el-icon-edit"}),i("i",{class:"el-icon-delete"})],-1);s();const C=g(((a,e,t,l,s,u)=>{const c=d("el-card"),p=d("el-progress"),C=d("el-col"),H=d("el-row"),M=d("el-button"),N=d("el-checkbox"),O=d("el-table-column"),R=d("el-table"),T=d("schart");return o(),n("div",null,[i(H,{gutter:20},{default:g((()=>[i(C,{span:8},{default:g((()=>[i(c,{shadow:"hover",class:"mgb20",style:{height:"252px"}},{default:g((()=>[i("div",v,[f,i("div",h,[i("div",m,r(l.login.username),1),i("div",null,r(l.role),1)])]),b,_])),_:1}),i(c,{shadow:"hover",style:{height:"252px"}},{header:g((()=>[w])),default:g((()=>[x,i(p,{percentage:71.3,color:"#42b983"},null,8,["percentage"]),y,i(p,{percentage:24.1,color:"#f1e05a"},null,8,["percentage"]),S,i(p,{percentage:13.7},null,8,["percentage"]),V,i(p,{percentage:5.9,color:"#f56c6c"},null,8,["percentage"])])),_:1})])),_:1}),i(C,{span:16},{default:g((()=>[i(H,{gutter:20,class:"mgb20"},{default:g((()=>[i(C,{span:8},{default:g((()=>[i(c,{shadow:"hover","body-style":{padding:"0px"}},{default:g((()=>[I])),_:1})])),_:1}),i(C,{span:8},{default:g((()=>[i(c,{shadow:"hover","body-style":{padding:"0px"}},{default:g((()=>[j])),_:1})])),_:1}),i(C,{span:8},{default:g((()=>[i(c,{shadow:"hover","body-style":{padding:"0px"}},{default:g((()=>[L])),_:1})])),_:1})])),_:1}),i(c,{shadow:"hover",style:{height:"403px"}},{header:g((()=>[i("div",J,[U,i(M,{style:{float:"right",padding:"3px 0"},type:"text"},{default:g((()=>[k])),_:1})])])),default:g((()=>[i(R,{"show-header":!1,data:l.todoList,style:{width:"100%"}},{default:g((()=>[i(O,{width:"40"},{default:g((a=>[i(N,{modelValue:a.row.status,"onUpdate:modelValue":e=>a.row.status=e},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(O,null,{default:g((a=>[i("div",{class:["todo-item",{"todo-item-del":a.row.status}]},r(a.row.title),3)])),_:1}),i(O,{width:"60"},{default:g((()=>[z])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1}),i(H,{gutter:20},{default:g((()=>[i(C,{span:12},{default:g((()=>[i(c,{shadow:"hover"},{default:g((()=>[i(T,{ref:"bar",class:"schart",canvasId:"bar",options:l.options},null,8,["options"])])),_:1})])),_:1}),i(C,{span:12},{default:g((()=>[i(c,{shadow:"hover"},{default:g((()=>[i(T,{ref:"line",class:"schart",canvasId:"line",options:l.options2},null,8,["options"])])),_:1})])),_:1})])),_:1})])}));p.render=C,p.__scopeId="data-v-12d0418e";export default p;
