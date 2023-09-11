document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll(".nav-link")
    for(const link of links){
      link.addEventListener("click", callbacknya);
    }
    function callbacknya(e){
      e.preventDefault();
      console.log(this);
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth"
      })

    }

  });

