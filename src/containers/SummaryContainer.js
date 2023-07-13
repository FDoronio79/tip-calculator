import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import { selectSubtotal, selectTipAmount, selectTotal } from '../store/items/selector';

const mapStateToProps = state => {
    /*
    Instead of doing all this logic like this we can use selectors like below
    // const items = state.items
    // const tipPercentage = state.tipPercentage

    // // let subtotal = 0;
    // // for (const item of items) {
    // //     subtotal += item.quantity * item.price
    // // }

    // const subtotal = items.reduce(
    //     (sum, item) => sum + item.price * item.quantity,
    //     0
    // );

    // const tipAmount = subtotal * (tipPercentage / 100);

    // const total = subtotal + tipAmount;
    */

    const subtotal = selectSubtotal(state);
    const tipAmount = selectTipAmount(state);
    const total = selectTotal(state);

    return {
        subtotal,
        tipAmount,
        total
    }
}

export const SummaryContainer = connect(mapStateToProps)(Summary);