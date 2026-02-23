export interface CustomerCreateDTO {
    name: string,
    email: string,
    phone?: string,
}
export interface CustomerUpdateDTO {
    name?: string,
    email?: string,
    phone?: string,
}


