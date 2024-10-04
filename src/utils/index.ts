export const formatDate = (dateString: string) => {
    const [day, month] = dateString.split('/').map(Number);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    return `${day} ${monthNames[month - 1]}`; // Return the day and abbreviated month
  };
  