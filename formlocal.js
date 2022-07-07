let data = window.localStorage.getItem('test')

if(!data){
    window.localStorage.setItem('test', '[]')
    data = []
}else{
    data = JSON.parse(data);
}
var index = 0

function signup (){
    const username = $('.signup-user').val();
    const password = $('.signup-pswd').val();
    const rePswd = $('.re-pswd').val();

    if(!username || !password) return alert('Dien du thong tin');

    let index = data.findIndex(function(value){ return value.username === username});

    if(index >= 0) return alert('User da ton tai');
    if (password.length<8) return alert('Mat khau phai dai hon 8 ky tu')
    if(rePswd!=password) return alert('Mat khau khong trung nhau')
    
    alert ('Dang ky thanh cong')
    data.push({username, password});
    window.localStorage.setItem('test', JSON.stringify(data));
}

function login (){
    let count=0
    const username = $('.login-user').val()
    const password =$('.login-pswd').val()
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.username===username&&element.password===password) {
            count++
            alert('Thanh cong')
            window.location.replace('D:/hoc tap/JV/localStorage/homelocal.html') 
        }
    }
    if(count==0){
        alert('Sai ten dang nhap hoac mat khau')
    }
}

