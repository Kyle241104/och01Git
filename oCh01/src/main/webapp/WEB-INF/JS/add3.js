	function chk() {
		if(form.onsubmit == 0) {
			alert("숫자를 입력해주세요");
			form.onsubmit.focus();
			return;
		} else if(isNaN(form.onsubmit)) {
			alert("숫자가 아닙니다");
			form.onsubmit.focus();
			return;
		}
	}