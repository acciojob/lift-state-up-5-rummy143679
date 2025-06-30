import React, {useState} from "react";
import Child from './Child'

export default function Parent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        <h1>Parent Component</h1>
        <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}
