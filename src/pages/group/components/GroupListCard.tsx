export const GroupListCard = () => {
    return (
        <div className="w-full h-[60px] border-2 border-primary-bg rounded-xl flex items-center justify-center p-2">
            <div className="flex flex-row items-center gap-2 ">
                <img src={process.env.PUBLIC_URL + '/running.png'} alt="roomie" width={'35px'} />
                <div className="flex flex-col">
                    <div className="font-['700'] text-xl text-primary-bg">러닝 크루</div>
                    <div className="font-['700'] text-ms text-primary-gray mt-[-2px]">화요일, 목요일 | 21:00 ~ 23:00</div>
                </div>
                <div className="bg-black w-[35px] h-[35px] rounded-full flex items-center justify-center text-white font-['600']">
                    2/6
                </div>
            </div>
        </div>
    )
}