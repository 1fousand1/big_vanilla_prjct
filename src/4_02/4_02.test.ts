import {addMoneyToBudget, CityType, demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./4_02";

let city: CityType;


beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id:1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id:2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id:3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'White street'}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1080,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }

        ],
        citizenNumber: 100000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000)
})


test('houses should be destroyed',()=>{
    demolishHousesOnTheStreet(city,'Happy street');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(1);

})

/*
test("list of streets titles of houses", ()=>{
    let happyHouses = getHousesOnTheStreet(city.houses, 'Happy street')
    let whiteHouses = getHousesOnTheStreet(city.houses, 'White street')

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
})*/

test("buildings with correct staff count", ()=> {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);


    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})
