(function() {

//przepisanie title na class, dla submenu
$('.sub-menu li a').each(function(){
	var $this = $(this);
	$this.parent().addClass($this.attr('title'));
	$this.removeAttr('title');
});

//main-nav click effect
$('.main-nav').find('a[href*="przepisy"]').on('click',function(e){
	e.preventDefault();
	$('.main-nav').find('.sub-menu').slideToggle();
});
	
})();