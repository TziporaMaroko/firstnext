"use client"

// app/bags/page.tsx
"use client";


import useStore from '@/store/useStore';




const Counter= () => {
  const { count } = useStore(); // Access the count from the store
  



  return (
    <div >
      <h1>Count: {count}</h1> {/* Display count here */}
      
    </div>
  );
};

export default Counter;
