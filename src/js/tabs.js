document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.about__project-button').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click',function(event){
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.about__project-tabs-container').forEach(function(acorСontainer){
              acorСontainer.classList.remove('about__project-tabs-container-active')
          });
          document.querySelector(`[data-target = "${path}"]`).classList.add('about__project-tabs-container-active')
      });
      
  });
});