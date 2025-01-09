export const getLastDate = (year: number, month: number): string => {
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    
    if(year === currentYear && month === currentMonth){
        
        return currentDate.toISOString().split("T")[0]
        //return formatDate(currentDate)
   
    } else {
        
        const date = new Date(year,month + 1, 0 )
        return date.toISOString().split("T")[0]
        //return formatDate(date)
    }

}

export const getStartDate = (year: number, month: number): string => {
    
    const date = new Date(year,month - 10, 0 )

    return date.toISOString().split("T")[0]
    //return formatDate(date)
}

export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }