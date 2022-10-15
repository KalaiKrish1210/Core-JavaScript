let day = "Monday"

switch(day){
    case 'Monday':
        console.log("10.30");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursaday":
    case "Friday":
        console.log("9.30");
        break;
    case "Saturday":
    case "Sunday":
        console.log("11.30");
        break;
    default:
        console.log("12.00");
}