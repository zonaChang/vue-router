Index.template = `
<table>
<tr>
	<td>姓名：</td>
	<td><input type="text" id="name" v-model="name"/></td>
</tr>
<tr>
	<td>密码：</td>
	<td><input type="password" id="password" v-model="password"/></td>
</tr>
<tr>
	<td>地址：</td>
	<td><input type="text" id="address" v-model="address" /></td>
</tr>
<tr>
	<td>年龄：</td>
	<td><input type="number" id="age" v-model="age" /></td>
</tr>
<tr>
	<td>身份证号：</td>
	<td><input type="identify" id="identify" v-model="identify" /></td>
</tr>
<tr>
	<td colspan="2"><button @click="submit()">注册</button></td>
</tr>

</table>

`