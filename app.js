const serverHandle = (req, res) => {
    // 设置返回的格式JSON
    res.setHeader('Content-type', 'application/json');
    res.send('ok');
}

module.exports = serverHandle;