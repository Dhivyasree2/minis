import { cartitem } from "./cartitem";
//for a class assume that cartitem apdina one from their row if cartitem[] then their entire row's
export class cart{
    carts:cartitem[]=[];
    get totalprice()
    {
        let totalprice1=0;
        this.carts.forEach(item=>
            totalprice1+=item.price)//item.price()
            return totalprice1;    
    }

}