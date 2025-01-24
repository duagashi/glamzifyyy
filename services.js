document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.dg-btn-toggle');

    faqButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-bs-target');
        const content = document.querySelector(targetId);

        document.querySelectorAll('.dg-collapse').forEach(openContent => {
          if (openContent !== content) {
            openContent.classList.remove('dg-collapse-show');
            openContent.style.maxHeight = null;
          }
        });

        if (content.classList.contains('dg-collapse-show')) {
          content.classList.remove('dg-collapse-show');
          content.style.maxHeight = null;
        } else {
          content.classList.add('dg-collapse-show');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });
  
  
