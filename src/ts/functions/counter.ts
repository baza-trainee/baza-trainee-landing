export function achievementsCounters() {
  const achievementsList = document.querySelector('.achievements__list')!;
  const [counterProjects, counterMembers, counterEmployed] = Array.from(
    document.querySelectorAll('.achievements__number span')!
  ) as Array<HTMLElement>;
  let options = {
    threshold: 0.5,
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(counterProjects, 200);
        animate(counterMembers, 0.1);
        animate(counterEmployed, 1);
      }
    });
  }, options);
  observer.observe(achievementsList);
}

function animate(element: HTMLElement, speed: number): void {
  const result = +element.getAttribute('counter-num')!;
  const value = +element.innerText!;

  if (value < result) {
    element.innerText = `${Math.ceil(value + 1)}`;
    setTimeout(() => {
      animate(element, speed);
    }, speed);
  } else {
    element.innerText = `${value}`;
  }
}
