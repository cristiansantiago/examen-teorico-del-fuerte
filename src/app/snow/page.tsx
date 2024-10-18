const Page = ()=>{
    return (
        <div className="flex item-center items-center justify-center align-middle mt-[140px]">
            <div className="flex flex-col align-middle items-center bg-slate-100 rounded-lg w-[500px] p-4">             
                <div className="flex border-2 border-solid border-black rounded-[50%] justify-center align-middle relative w-[100px] h-[100px]">
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute left-[25%] top-[30%]"></div>
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute right-[25%] top-[30%]"></div>
                </div>
                <div className="grid grid-cols-2 justify-around text-center items-center place-items-center border-2 border-solid border-black rounded-[50%] align-middle relative  w-[150px] h-[150px]">
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] m-[5px] text-center"></div>
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] m-[5px] text-center"></div>
                </div>
                <div className="flex flex-col items-center border-2 border-solid border-black rounded-[50%] justify-evenly align-middle relative  w-[200px] h-[200px]">             
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] m-[5px]"></div>
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] m-[5px]"></div>
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] m-[5px]"></div>                 
                </div>            
            </div>
        </div>
        
    )
}
export default Page;