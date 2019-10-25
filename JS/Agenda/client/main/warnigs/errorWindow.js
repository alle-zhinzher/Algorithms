export const errorWindow = (text, location) => {
    const regiserForm = document.getElementById(location);

    const errorWrapper = document.createElement('section');
    const errorHeading = document.createElement('h3');
    const errorMsg = document.createElement('p');

    errorWrapper.className = "error-wrapper";
    errorHeading.className = "error-heading";
    errorMsg.className = "error-msg";

    errorHeading.appendChild(document.createTextNode("Error"));
    errorMsg.appendChild(document.createTextNode(text));

    errorWrapper.appendChild(errorHeading);
    errorWrapper.appendChild(errorMsg);

    regiserForm.appendChild(errorWrapper);

    setTimeout(() => errorWrapper.className = "error-disable", 3000)
}