function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}


test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = adminsCount + 1

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})


test('reference type test', () => {
    const address = {
        title:'Minsk'
    }


    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address

    }

    let addr = user.address

    let user2: UserType = {
        name: 'natasha',
        age: 30,
        address: address
    }

    user2.address.title = 'Kanary'

    expect(user.address.title).tobe('Kanary')
})



test('reference  array test', () => {
    const address = {
        title:'Minsk'
    }


    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address

    }

    let user2: UserType = {
        name: 'natasha',
        age: 30,
        address: address
    }


    const users = [user, user2, {name: 'Misha', age:4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'
})
