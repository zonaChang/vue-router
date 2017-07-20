var routes=[{
	path:"/",
     component:Index
}, {
	path:"/detail",
	component:Detail,
	name:"detail"
}

];

var router = new VueRouter({
	routes : routes
});
router.beforeEach(function(to, from, next){
	next();
});
