import "../../../styles/index.scss";
import membershipWelcome from "./membership-welcome.html";
import membershipJoin from "./membership-join.html";

export default { title: "Part Types|Membership", component: membershipWelcome };

export const welcome = () => membershipWelcome;
export const join = () => membershipJoin;
