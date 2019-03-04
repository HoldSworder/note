Qzr.inputNumber = function(obj) {  //设置两位小数、并限定最大最小值
	$(`input[name=${obj.name}]`).on('blur', function() {
		let replace = $(this).val().replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')

		$(this).val(replace)

		if($(this).val() > obj.max) {
			$(this).val(obj.max)
		}else if($(this).val() < obj.min) {
			$(this).val(obj.min) 
		}
	})
}