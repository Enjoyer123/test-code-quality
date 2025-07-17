// เพิ่มไฟล์ใหม่ใน GitHub: good-code.js
function calculateFactorial(n) {
  if (n < 0) {
    throw new Error('Invalid input');
  }
  
  if (n <= 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// เพิ่มไฟล์: bad-code.js
function fact(n){if(n<0)return -1;if(n<=1)return 1;var r=1;for(var i=2;i<=n;i++){r*=i;}return r;}
