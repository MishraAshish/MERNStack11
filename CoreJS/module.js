// Any file or multiple files doing a function, is/are termed as module/s

var User = {
    Name : 'Jason',
    Age : 26,
    Specialization : 'MERNStack',

    GetUserInfo :  function () {
        return {"Session" : this.Specialization}
    }
}

var User2 = {
    Name : 'Mueen',
    Age : 26,
    Specialization : 'JS Modules',

    GetUserInfo :  function () {
        return {"Session" : this.Specialization}
    }
}


module.exports = {
    User,
    User2
};

//export User; //ES6