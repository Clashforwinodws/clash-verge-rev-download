    const buttons = document.querySelectorAll('.download-windows');
	
	buttons.forEach(btn => {
		btn.addEventListener('click', async (e) => {
		
			const current = e.currentTarget;
			const fileKey = current.getAttribute('data-file');
			const currentBtn = e.currentTarget;
			const originalText = currentBtn.innerHTML;
			currentBtn.innerText = '请求中...';
			currentBtn.disabled = true; 

			try {
				const response = await fetch(`https://appdownloadcn.cc/api/download?file=${fileKey}`);
				
				if (!response.ok) {
					throw new Error('网络请求失败');
				}

				const data = await response.json();

				if (data && data.code === 0 && data.url) {
					const a = document.createElement('a');
					a.href = data.url;
					a.download = ''; 
					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
				} else {
					throw new Error('业务数据异常');
				}

			} catch (error) {
				console.error('下载出错:', error);
				alert('下载出错，请重试');

			} finally {
				currentBtn.innerHTML = originalText;
				currentBtn.disabled = false;
			}
		});
	});
