import { Notify } from "quasar";
function dialog(message, color) {

    Notify.create({
        type: "success",
        color: 'green',
        timeout: 1000,
        position: "bottom",
        message: message,
    });
}
export default dialog;
