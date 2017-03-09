/**
 * Created by sujoy on 3/9/2017.
 */


export class User{
  private email:string;
  private password:string;
  //private emailConfirmed:boolean;

  constructor(email:string ,password:string){
    this.email = email;
    this.password = password;
  }

  // public isEmailConfirmed():boolean {
  //   this.emailConfirmed = true;
  //   return this.emailConfirmed;
  // }

  public setEmail(email:string) {
    this.email = email;
  }
  public setPassword(password:string){
    this.password = password;
  }
  public getEmail():string {
    return this.email;
  }
  public getPassword():string {
    return this.password;
  }



  // getEmailConfirmedValue(url): Observable<any> {
  //   url = "http://localhost:5000/api/v1/dbconnection?uri=" + encodeURIComponent(url);
  //   return this.http.get(url)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
}
