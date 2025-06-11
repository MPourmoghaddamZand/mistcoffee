export const Line = () => {
    return (
        <div className='h-[1px] w-full bg-myhardbrown' />
    )
}
const Spliter = ({ title }) => {
    return (
        <div className='flex w-full justify-center items-center'>
            <Line />
            <div className='px-3'>
                <h2 className='text-myhardbrown text-lg text-nowrap font-black'>{title}</h2>
            </div>
            <Line />
        </div>
    )
}

export default Spliter;