const downClass = document.querySelectorAll('.download-github')
downClass.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const a = document.createElement("a");
		a.href = "https://yangyangoss8.oss-cn-hongkong.aliyuncs.com/Letslat2.5.zip"; // 文件地址
		a.download = "Letslat2.5.zip"; // 下载后的文件名
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
})