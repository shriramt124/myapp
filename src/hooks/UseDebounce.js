function UseDebounce(cb,delay=2800){
    let timerid;
   return (...args)=>{
    clearTimeout(timerid);
timerid = setTimeout(()=>{
cb(...args);
},delay)
   }
}
export default UseDebounce;