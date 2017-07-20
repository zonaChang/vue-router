var app = new Vue({
	router:router,
	data: function(){
		return {
			
		}
	},
	methods:{
		$: function(el){
			return document.getElementById(el) || null;
		},
		checkBlank: function(val){ // 检测值是否为空， true：空， false：不为空
			if(val == "undefined" || val == null || val == ""){
				return true;
			} else {
				return false;
			}
		},
		toast: function(msg){
			//自定义弹窗
			alert(msg);
		}
	},
	mounted: function(){
		
	}
});
app.$mount("#app");