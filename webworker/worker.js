onmessage = function(e) {
    console.log('Worker: 接收信息');
    const result =  e.data[0] >e.data[1]?'数字1更大':(e.data[0]<e.data[1]?'数字2更大':'二者相等');
    if (isNaN(result)) {
      postMessage('Please write 2 numbers');
    } else {
      const workerResult = '结果是： ' + result;
      console.log('Worker: 传回信息');
      postMessage(workerResult);
    }
  }