var Index = {
		data: function(){
			return {
				name: "name-value",
				password:"",
				address : "address-value",
				age: 24,
				identify:""
			}
		},
		methods:{
			submit: function(){
				var self = this;
				if(app.checkBlank(self.name)){
					app.toast("name is not blank");
				}
				if(app.checkBlank(self.password)){
					app.toast("password is not blank");
				}
				if(app.checkBlank(self.age)){
					app.toast("age is not blank");
				}
				if(app.checkBlank(self.identify)){
					app.toast("identify is not blank");
				}
				app.toast("注册成功！");
				router.push("/detail");
			}
		},
		mounted: function(){
			document.title = "首页";
			console.log("indext....");
		}
}