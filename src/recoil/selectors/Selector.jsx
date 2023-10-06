import { selector } from "recoil";
import transactionListState from "../atoms/atoms";

const balanceState = selector({
    key:"balanceState",
    get:({get}) =>{
        const transactionList = get(transactionListState);
        const amount = transactionList.map((transaction)=>transaction.amount);
        const balance = amount.reduce((acc,num)=>(acc += num),0).toFixed(2);
        return balance;
    }
})
export default balanceState;