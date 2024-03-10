export class RegisterFailedError extends Error {
    constructor(message:string){
        super(message);
    }
}