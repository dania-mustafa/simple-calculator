 // ===== JavaScript (exactly as provided, with one small addition) =====
    function appendValue(value) {
      const display = document.getElementById('display');
      if (display.value === '0' || display.value === 'Error!') {
        display.value = value;
      } else {
        display.value += value;
      }
    }

    function clearDisplay() {
      document.getElementById('display').value = '0';
    }

    function calculate() {
      const display = document.getElementById('display');
      try {
        // replace visual ÷ and × with JS-friendly operators
        let expr = display.value.replace(/÷/g, '/').replace(/×/g, '*');
        display.value = eval(expr);
      } catch (e) {
        display.value = 'Error!';
      }
    }

    function toggleSign() {
      const display = document.getElementById('display');
      if (!display.value || display.value === '0' || display.value === 'Error!') return;
      if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
      } else {
        display.value = '-' + display.value;
      }
    }

    // initial value
    document.getElementById('display').value = '0';