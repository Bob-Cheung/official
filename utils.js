// 发送数据

function send(data, WEBHOOK) {
  const body = {
    msgtype: "text",
    text: {
      content: `📩 新用户留言\n📱 联系方式：${data.phone.trim()}\n💬 留言：${data.msg.trim()}`
    }
  };

  fetch(WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(data => {
      if (data.errcode === 0) {
        alert("发送成功！");
      } else {
        alert("发送失败：" + data.errmsg);
      }
    })
    .catch(err => {
      alert("网络错误或 Webhook 配置异常");
      console.error(err);
    });
}