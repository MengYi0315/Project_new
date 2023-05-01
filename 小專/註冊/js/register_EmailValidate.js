const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.email.value;

        // 发送验证邮件
        fetch('http://example.com/api/send-verification-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
        })
        .then(response => {
        if (response.ok) {
            // 验证邮件已发送
            alert('Verification email sent.');
        } else {
            // 处理错误
            alert('Unable to send verification email.');
        }
        })
        .catch(error => {
        // 处理错误
        alert('Unable to send verification email.');
        console.error(error);
        });
    })