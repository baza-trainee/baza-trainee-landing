const teamButtons = document.querySelectorAll(".projects-section__team__btn");
const closeButton = document.querySelector(".thumb__close-icon");
let openProject: Element | null = null;
teamButtons.forEach((button) =>{
    button.addEventListener("click" , (e) =>{
        const btn = e.currentTarget as HTMLElement;
        const project = btn.closest(".projects-section__projects-item") as HTMLElement;
        const closeButton = project.querySelector(".thumb__close-icon");
        if (project) {
                        const projectInfo = project.querySelector('.thumb') as HTMLElement;
                        if (projectInfo) {
                            const content = project.querySelector(".projects-section__projects-item-container") as HTMLElement;
                            
                            projectInfo.style.top = '-46.4rem';
                            content.style.display = "none";
                            openProject = project;
                            if(closeButton){
                                    closeButton.addEventListener("click", ()=>{
                                    projectInfo.style.top = '7.7rem';
                                    content.style.display= "block";
                                })
                        }}
                    }
                })
            })