
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const submitButton = document.querySelector('button');
const fulfilled = document.querySelector('input[value="fulfilled"]');
submitButton?.addEventListener('click', handleSubmit);
const delayInput = document.querySelector('input[name="delay"')



function submitHandle(event) {
  event.preventDefault();
  const { delay, state } = event.target.elements;
  const delayTime = delay.value;
  const choice = state.value;

  createPromise(delayTime, choice)
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    });
  form.reset();
}

function createPromise(delayTime, choice) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (choice === 'fulfilled') {
        resolve(
          iziToast.show({
            ...iziSuccessOptions,
            message: `Fulfilled promise in ${delayTime}ms`,
          })
        );
      } else {
        reject(
          iziToast.show({
            ...iziRejectOptions,
            message: `Rejected promise in ${delayTime}ms`,
          })
        );
      }
    }, delayTime);
  });
}

    promise.then(() => {
        showNotification(`✅ Fulfilled promise in ${delay}ms`, '#59a10d');
    })
        .catch(() => {
            showNotification(`❌ Rejected promise in ${delay}ms`, '#ef4040');
        });


function showNotification(message, backgroundColor) {
    iziToast.show({
        message: message,
        messageColor: ' #fff',
        backgroundColor: backgroundColor,
        position: 'topCenter',
        messageSize: '16px',
        messageLineHeight: '150%',
        iconColor: 'white'

    });
}
