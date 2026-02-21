export interface UserCreateDTO {
     name: string,
     password: string,
     email: string,
}

export interface UserUpdateDTO {
    name?: string,
    password?: string,
    email?: string
}