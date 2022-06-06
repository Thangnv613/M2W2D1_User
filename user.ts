enum Role{
    admin = 1,
    user = 2
}
export class User{
    protected name :string;
    protected email :string;
    role :Role;
    constructor(name :string, email :string, role :Role){
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        return this.name + "," + this.email + "," + this.role
        
    }
    isAdmin(){
        if(this.role == 1){
            return 'Đây là admin'
        }
        return 'Đây là người dùng binh thường'
    }
}


