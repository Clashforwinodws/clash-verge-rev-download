const downClass = document.querySelectorAll('.download-github')
downClass.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const a = document.createElement("a");
		a.href = "https://iccoauvvv.oss-cn-hongkong.aliyuncs.com/Clash.Verge_2.5.1_x64-setup.zip"; // 文件地址
		a.download = "Clash.Verge_2.5.1_x64-setup.zip"; // 下载后的文件名
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
})
