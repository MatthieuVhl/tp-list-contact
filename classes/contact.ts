class Contact {
private static _count: number = 0
private _id : number;
private _firstname: string;
private _lastname: string;
private _age: number;
private _mail: string;
private _phoneNumber: string;

constructor( firstname: string, lastname: string, age: number, mail: string,  phoneNumber: string,){
    this._id =  ++ Contact._count 
    this._firstname = firstname
    this._lastname = lastname
    this._age =  age
    this._mail = mail
    this._phoneNumber = phoneNumber
}



get firstname() {
    return this._firstname
}

set firstname(value: string) {
    if (value !== "") {
    this._firstname = value
    }
}

get fullname() {
    return this._firstname + " " + this._lastname
}

get age(){
    return this._age
    }
set age(value: number){
    if(value !== 0 ){
        this._age = value
    }
}


get mail() {
    return this._mail
    }

set mail(value: string) {
    if (value !== "") {
    this._mail = value
    }
}
get phoneNumber(){
    return this._phoneNumber
}
set phoneNumber(value: string){
    if(value !== "" ){
        this._phoneNumber = value
    }
}


}

export {Contact};





