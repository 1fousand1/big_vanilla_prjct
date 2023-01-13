import {student, StudentType} from "../2/02.test";

export const sum = (a: number, b:number) =>{
    return a + b;
}
/*export function sum(a: number, b:number){
    return a + b;
}*/


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}
/*export function addSkill2(student: StudentType, skill: string){
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}*/




