export const formdate = (date) => {
    const hours = new Date(date).getHours({hour: 'numeric', hour12: true});
    var ampm = (hours >= 12) ? "PM" : "AM";
    const minute = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minute < 10 ? '0' + minute : minute} ${ampm}`
} 

export const downloadData = (e,originalImage) => {
    e.preventDefault();
    try {
        fetch(originalImage).then(resp => resp.blob())
        .then(blob=> {
            const url = window.URL.createObjectURL(blob);
            const a =document.createElement('a');
            a.style.display = "none";
            a.href = url; 
            const nameSplit = originalImage.split("-").pop();
            a.download = ""+ nameSplit + "";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url)
        }).catch(err =>
            console.log(err.message));
    }catch(err){
        console.log(err.message);
    }
}