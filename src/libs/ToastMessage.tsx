import { toast } from "react-toastify";
import { Status } from "@/libs/LoginStatus";
export const showToastMessage = (message: string, status: Status) => {
    switch (status) {
        case Status.SUCCESS: {
            toast.success(message);
            break;
        }
        case Status.ERROR: {
            toast.error(message);
            break;
        }
        default: {
            toast.warning(message);
            break;
        }
    }
}