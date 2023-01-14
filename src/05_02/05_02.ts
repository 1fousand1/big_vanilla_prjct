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



export const getStreetsTitlesOfGovernmentsBuildings= (Buildings: Array<GovernmentBuildingsType>) => {
    return Buildings.map(b => b.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HousesType>){
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HousesType>){
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}