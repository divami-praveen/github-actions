import React, { useEffect } from 'react'

const Header = () => {
     // JSX
     const a = 10;
        const b = 20;
        const c = a + b;
        function sum(a, b) {
            return a + b;
        }

        useEffect(() => {
            console.log(sum(10, 20));
            console.log(c, 'c');
            console.log('Hello World');
        }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Header
