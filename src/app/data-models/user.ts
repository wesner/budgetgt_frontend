export class User{
     public id: number;
     public first_name: string;
     public last_name: string;
     public email: string;
     public create_at: string;
     public update_at: string;
     public country_fk: number;
     public restart_automatic: boolean;
     public restart_day: number;

     constructor(dat?:User){
          if(dat){
               this.id = dat.id;
               this.first_name = dat.first_name;
               this.last_name = dat.last_name;
               this.email = dat.email;
               this.create_at = dat.create_at;
               this.update_at = dat.update_at;
               this.country_fk = dat.country_fk;
               this.restart_automatic = dat.restart_automatic;
               this.restart_day = dat.restart_day;
          }
          else{
               this.id = 0;
               this.first_name = "";
               this.last_name = "";
               this.email = "";
               this.create_at = "";
               this.update_at = "";
               this.country_fk = 0;
               this.restart_automatic = true;
               this.restart_day = 0;
          }
     }
}