import React, {useState} from 'react';

export default function Profile() {
    const [logggedin, setLoggedIn] = useState(2);
    // return(
    //     <div>
    //         {
    //             logggedin ?<h1>Welcome User</h1>:
    //             <h1>Welcome Guest</h1>
    //         }
    //     </div>

    // )

    //1,2,3, elase condition
    return(
        <div>
            {
                logggedin ===1 ?<h1>Welcome User 1</h1>
                : logggedin ===2 ?<h1>Welcome User 2</h1>
                :logggedin ===3 ?<h1>Welcome User 3</h1>:
                <h1>Welcome Guest</h1>
            }
        </div>

    )
}