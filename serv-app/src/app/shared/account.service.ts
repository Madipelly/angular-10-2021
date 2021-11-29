export class AccountService{
    accounts = [
        {
        name: 'Master Account',
        status: 'Active'
      },
      {
        name: 'Test Account',
        status: 'Inactive'
      }
    ];

    addAccount(name: string,status:string){
        this.accounts.push({name: name,status:status})
    }
    
    updateStatus(id:number,status:string){
        this.accounts[id].status = status;
    }
    
}