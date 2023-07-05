import { connect } from "react-redux"
import { MenuItems } from "../components/MenuItems";


const test = 'test'
const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems)