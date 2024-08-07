import { getJWTfromLocalStorage } from "../../libs/LocalStorage";

export default function UserPage() {
    const user_Jwt = getJWTfromLocalStorage();

    return (
        <div>
            <h1>Hello user</h1>
        </div>
    );
}
