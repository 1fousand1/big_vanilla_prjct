type LocalCityType ={
    title: string
    countryTitle: string
}

type AddressType ={
    streetTitle: string
    city: LocalCityType
}

export type StudentType={
    id: number
    name:string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}

export type TechType={
    id:number
    title: string
}

export const student:StudentType= {
    id:1,
    name:"Dan",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title:"Saint-P",
            countryTitle: "belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: 'html'
        },
        {
            id: 2,
            title: 'css'
        },
        {
            id: 3,
            title: 'react'
        }

    ]
}

console.log(student.technologies[2].title)