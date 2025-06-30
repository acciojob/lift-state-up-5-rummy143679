import React, {useState} from "react";
import Child from './Child'

export default function Parent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}
