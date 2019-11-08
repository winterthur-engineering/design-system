import "../../../styles/index.scss";
import welcomeForm from "./membership-welcome.html";
import joinForm from "./membership-join.html";
import changeableForm from "./membership-changeable.html";
import fall2019Form from "./membership-fall2019.html";
import FY2015Form from "./membership-FY2015.html";
import FY2019Form from "./membership-FY2019.html";
import M15APR5Form from "./membership-M15APR5.html";
import RenewalFormForm from "./membership-Renewal-form.html";

export default {
  title: "Parts|System/Membership"
};

export const welcome = () => welcomeForm;
export const join = () => joinForm;
export const changeable = () => changeableForm;
export const fall2019 = () => fall2019Form;
export const FY2015 = () => FY2015Form;
export const FY2019 = () => FY2019Form;
export const M15APR5 = () => M15APR5Form;
export const RenewalForm = () => RenewalFormForm;
