
$(document).ready(function(){
	// alert("test");
	$("#type").change(function(){
		var type= $("#type").val();
		// alert(type);
		if(type == "Admin"){
			$("#access").hide();
		}else{
			$("#access").show();
		}
	});
	// $("#new_pwd").click(function(){
	// 	var current_pwd= $("#current_pwd").val();
	// 	// alert(current_pwd);
	// 	$.ajax({
	// 		type: 'get',
	// 		url: '/admin/check-pwd',
	// 		data: {current_pwd: current_pwd},
	// 		success: function(resp){
	// 			// alert(resp);
	// 			if(resp== "false"){
	// 				$("#chkPwd").html("<font color='red'>Current Password is Incorrect </font>");
	// 			}else if(resp=="true"){
	// 				$("#chkPwd").html("<font color='green'> Current Password is Correct </font>");
	// 			}
	// 		},error:function(){
	// 			alert("Error");
	// 		}
	// 	});
	// });

	$("#current_pwd").keyup(function(){
		var current_pwd= $("#current_pwd").val();
		// alert(current_pwd);
		$.ajax({
			type: 'get',
			url: '/admin/check-pwd',
			data: {current_pwd: current_pwd},
			success: function(resp){
				// alert(resp);
				if(resp== "false"){
					$("#chkPwd").html("<font color='red'>Current Password is Incorrect </font>");
				}else if(resp=="true"){
					$("#chkPwd").html("<font color='green'> Current Password is Correct </font>");
				}
			},error:function(){
				alert("Error");
			}
		});
	});

	$(".userStatus").change(function(){
		// alert("test");
		var user_id = $(this).attr('rel');
		// alert(user_id);
		if($(this).prop("checked") == true){
			// To make status Enabled (1)
			// alert("test1");
			$.ajax({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},	
				type: 'post',
				url: '/admin/update-user-status',
				data: {status: '1', user_id: user_id},
				success: function(resp){
					// alert(resp);
				}, 
				error: function(){
					alert("Error");
				}
			})
		}else{
			// To make Status Disabled (0)
			// alert("test2");
			$.ajax({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},	
				type: 'post',
				url: '/admin/update-user-status',
				data: {status: '0', user_id: user_id},
				success: function(resp){
					// alert(resp);
				}, 
				error: function(){
					alert("Error");
				}
			})
		}
	})
	
	$('input[type=checkbox],input[type=radio],input[type=file]').uniform();
	
	$('select').select2();
	
	// Form Validation
    $("#basic_validate").validate({
		rules:{
			required:{
				required:true
			},
			email:{
				required:true,
				email: true
			},
			date:{
				required:true,
				date: true
			},
			url:{
				required:true,
				url: true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	// Add Category Validation
    $("#add_category").validate({
		rules:{
			category_name:{
				required:true
			},
			description:{
				required:true
			},
			url:{
				required:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	// Add Product Validation 

	$("#add_product").validate({
		rules:{
			category_id:{
				required:true
			},
			product_name:{
				required:true
			},
			product_code:{
				required:true
			},
			product_color:{
				required:true
			},
			price:{
				required:true,
				number:true
			},
			image:{
				required: true
			}
			
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	// Edit Product Validation
	$("#edit_product").validate({
		rules:{
			category_id:{
				required:true
			},
			product_name:{
				required:true
			},
			product_code:{
				required:true
			},
			product_color:{
				required:true
			},
			price:{
				required:true,
				number:true
			}
			
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	

	
	$("#number_validate").validate({
		rules:{
			min:{
				required: true,
				min:10
			},
			max:{
				required:true,
				max:24
			},
			number:{
				required:true,
				number:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#password_validate").validate({
		rules:{
			current_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			new_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			confirm_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#new_pwd"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	$("#delCat").click(function(){
		// alert("Hello");
		if(confirm("Are you sure you want delete this Category? ")){
			return true;
		}
		return false;
	});

	// $("#delProduct").click(function(){
	// 	// alert("Hello");
	// 	if(confirm("Are you sure you want delete this Product? ")){
	// 		return true;
	// 	}
	// 	return false;
	// });

	// $("#delCoupon").click(function(){
	// 	if(confirm("Are you sure you want delete this Coupon? ")){
	// 		return true;
	// 	}
	// 	return false;
	// });

	// function delCoupon(){
	// 	if(confirm("Are you sure you want delete this Coupon? ")){
	// 		return true;
	// 	}
	// 		return false;
	// }

	// $(document).click(function(){
	
	$('.deleteRecord').click(function(){
		// alert("Hello");
		var id = $(this).attr('rel');
		var deleteFunction = $(this).attr('rel1');
		// alert(id);
		// alert(deleteFunction);
		// alert(id + deleteFunction);
		
		swal({
			title: 'Are you Sure?',
			text: 'You will not be able to recover this record again!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonClass: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete It',
			cancelButtonText: 'No Cancel',
			confirmButtonClass: 'btn btn-success',
			cancelButtonClass: 'btn btn-danger',
			buttonsStyling: false,
			reverseButtons: true
		},
			function(){
				window.location.href="/admin/"+deleteFunction+"/"+id;
				// window.location.href= "/admin/view-products";
			}
		);
		// return false;
	});

	$(document).ready(function(){
		var maxField = 10; //Input fields increment limitation
		var addButton = $('.add_button'); //Add button selector
		var wrapper = $('.field_wrapper'); //Input field wrapper
		var fieldHTML = '<div class="field_wrapper" style="margin-left:180px; margin-right:5px; margin-top:5px;"><div><input type="text" name="sku[]" id="sku" placeholder="SKU" style="width:120px; margin-right:5px; margin-top:5px;"/><input type="text" name="size[]" id="size" placeholder="Size" style="width:120px; margin-right:5px; margin-top:5px;"/><input type="text" name="price[]" id="price" placeholder="Price" style="width:120px; margin-right:5px; margin-top:5px;"/><input type="text" name="stock[]" id="stock" placeholder="Stock" style="width:120px; margin-right:5px; margin-top:5px;"/><a href="javascript:void(0);" class="remove_button" title="Remove Field">Remove</a></div></div>'; //New input field html 
		var x = 1; //Initial field counter is 1
		
		//Once add button is clicked
		$(addButton).click(function(){
			//Check maximum number of input fields
			if(x < maxField){ 
				x++; //Increment field counter
				$(wrapper).append(fieldHTML); //Add field html
			}
		});
		
		
		//Once remove button is clicked
		$(wrapper).on('click', '.remove_button', function(e){
			e.preventDefault();
			$(this).parent('div').remove(); //Remove field html
			x--; //Decrement field counter
		});
	});
});
