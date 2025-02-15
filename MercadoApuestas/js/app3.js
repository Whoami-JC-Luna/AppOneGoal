document.addEventListener('DOMContentLoaded', function() {
    const sidebarTitles = document.querySelectorAll('.sidebar__title');

    sidebarTitles.forEach(function(title) {
      title.addEventListener('click', function() {
        const sidebarList = title.nextElementSibling;

        if (sidebarList) {
          sidebarList.classList.toggle('hidden');
        }
      });
    });
  });
