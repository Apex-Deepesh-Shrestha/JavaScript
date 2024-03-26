function tempConversion(){
    // Alert returns a pop-up with the message imbued
    alert('Hello my name is Dipesh Shrestha and Welcome to my JS repo !');
    //Creating a const type variable and taking input through a prompt pop-up
    const celsius = prompt('Enter the temperature in Celsius: ');
    //Since the input is in string convert it into flaot using paseFloat() and performing futher calcuations
    const fahren = (parseFloat(celsius)*9/5)+32;
    //Displaying the output through pop-up
    alert('The corresponding temeperature in fahrenheit is : '+fahren);
    //Displaying output in the webpage
    document.body.innerHTML = 'The corresponding temeperature in fahrenheit is : '+fahren;
}
//Adding eventListener to the window object to detect the loading of webpage to call  tempConversion function
window.addEventListener('load', tempConversion)


 