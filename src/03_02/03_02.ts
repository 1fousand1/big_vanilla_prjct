let city: CityType;

export type CityType = {
    title: String
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}
type HousesType = {
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