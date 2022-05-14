function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function fixHandler() {
  const pickerEl = this.parentNode;

  if (pickerEl.parentNode != null) {
    pickerEl.parentNode.removeChild(pickerEl);
  }
}

ready(() => {
  const elementSelector = '.wx-picker-dialog-mask';

  ['touchstart'].forEach((eventName) => {
    document.addEventListener(
      eventName,
      function (e) {
        // loop parent nodes from the target to the delegation node
        for (
          let target = e.target;
          target && target != this;
          target = target.parentNode
        ) {
          if (target.matches(elementSelector)) {
            fixHandler.call(target, e);

            break;
          }
        }
      },
      false
    );
  });
});
