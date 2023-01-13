let city: CityType;

export type CityType = {
    title: String
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}
type HousesType = {
    id:number,
    buildedAt: number,
    repaired: false,
    address: AddressType
}

type AddressType ={
    number: number
    street: StreetType
}

type StreetType={
    title:string
}

type GovernmentBuildingsType ={
    type: string,
    budget: number,
    staffCount: number,
    address: StreetGovernmentBuildingsType
}

type StreetGovernmentBuildingsType = {
    street:  StreetType
}


export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}


export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street )

}

export function getBuildingsWithStaffCountGreaterThen(Buildings: Array<GovernmentBuildingsType>, number: number){
    return Buildings.filter( b => b.staffCount > number)
}