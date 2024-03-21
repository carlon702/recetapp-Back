export class RegisterFailedError extends Error {
    constructor(message:string){
        super(message);
    }
}

export class UserDoesNotExistError extends Error{
    constructor(message:string){
        super(message);
    }
}