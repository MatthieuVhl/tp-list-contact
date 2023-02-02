class Contact {
    constructor(firstname, lastname, age, mail, phoneNumber) {
        this._id = ++Contact._count;
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this._mail = mail;
        this._phoneNumber = phoneNumber;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        if (value !== "") {
            this._firstname = value;
        }
    }
    get fullname() {
        return this._firstname + " " + this._lastname;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value !== 0) {
            this._age = value;
        }
    }
    get mail() {
        return this._mail;
    }
    set mail(value) {
        if (value !== "") {
            this._mail = value;
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        if (value !== "") {
            this._phoneNumber = value;
        }
    }
}
Contact._count = 0;
export { Contact };
