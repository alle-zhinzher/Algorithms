export const successWindow = (text, location) => {
    const regiserForm = document.getElementById(location);

    const errorWrapper = document.createElement('section');
    const errorHeading = document.createElement('h3');
    const errorMsg = document.createElement('p');

    errorWrapper.className = "success-wrapper";
    errorHeading.className = "success-heading";
    errorMsg.className = "success-msg";

    errorHeading.appendChild(document.createTextNode("Success"));
    errorMsg.appendChild(document.createTextNode(text));

    errorWrapper.appendChild(errorHeading);
    errorWrapper.appendChild(errorMsg);

    regiserForm.appendChild(errorWrapper);

    setTimeout(() => errorWrapper.className = "error-disable", 3000)
}