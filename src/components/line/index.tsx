type Props = {
    title: string,
    value: number,
    style?: string 

}

export const Line = ({title,value,style}:Props) => {
    return (
        <div className={`${style} flex justify-between text px-2 rounded-md`}>
            <p>{title}</p>
            <p>{value}</p>
        </div>

    )
}