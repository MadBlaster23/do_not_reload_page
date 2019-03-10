function post() {
            var name = document.getElementById("name").value;
            var message = document.getElementById("message").value;
            if(name && message) {
                $.ajax( {
                    type: 'post',
                    url: 'post_data.php',
                    data: {
                        user_name:name,
		                user_message:message
                    },
                    success: function (response) {
	                    document.getElementById("status").innerHTML="Form Submitted Successfully";
                    }
                });
             }
            return false;
        }
