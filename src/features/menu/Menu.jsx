import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
    // get the data from the loader
    const menu = useLoaderData();

    return <ul>
        {menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>;
}

// data loader function from React Router
export async function loader() {
    const menu = await getMenu();
    return menu;
}

export default Menu;