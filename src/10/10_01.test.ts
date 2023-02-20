import {makeHairstyle, upgradeUserLaptop, UserType, UserWithLapTopType} from './10_01'




test('reference type test'), () => {
    let user: UserType = {
        name:'Dimych',
        hair: 32,
        address:{
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
}

test('upgrade laptop to macbook'), () => {
    let user: UserWithLapTopType = {
        name:'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop).toBe('Macbook')
    expect(user.laptop).toBe('ZenBook')
}