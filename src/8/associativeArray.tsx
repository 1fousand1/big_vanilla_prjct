/*/!*
var user = {
    name: 'Dimych',
    age: 12,
    address: {
        city:{
            title:'Minsk'
        }
    }
}
*!/

console.log(user.address.city.title)

console.log(user['address']['city']['title'])


let city = {}

city.title = 'Minsk'
city['CitizensCount'] = 100

/!*let users =["dimych", 'natasha', 'valera', 'Katya']// usual Array*!/

let usersObj = {
    '0':'Dimych',
    '1':'Natasha',
    '2':'Valera',
    '3':'Katya'

}

usersObj['0'] //покажет 'Dimych'


userObj['privet kak dela'] = 'vse ok'

userObj['table'] = 'brown'

Object.key(users) /// получаем ключи от объекта users['0','1','2','3']
Object.values(users) ///получаем массив значений ['Dimych','Natasha','Valera','Katya'])*/


//если передать в ассоциативный массив null то он станет строкой, а если передать {} то JS выдаст строку Object



 type UsersType ={
    [key: string]: {id:number, name: string }

}

////
const users: UsersType  ={
    '101' : {id:101,  name: "Dimuch"},
    '5' : {id:5,  name: "Viktor"},
    '87' : {id:87,  name: "Mihail"},
    '11' : {id:11,  name: "Anrdrey"}
}

var user = {id:100500, name:'Igor'}
users[user.id] = user
delete users[user.id]
//Добавление юзера в ассоциативный массив
//////

