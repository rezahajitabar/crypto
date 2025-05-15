const convertData=(data,type)=>{
  const convertedData=data[type].map((item)=> {
    const newDate=new Date(item[0]);
    const formatDate=newDate.toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "numeric",
    })
    return{
        date:formatDate,
        [type]:item[1]
    }
    
  })
  return convertedData;

}

export {convertData}