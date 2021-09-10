/**
 * @author www
 * @time 2021-0827-1106
 * @document https://greensock.com/scrolltrigger/
 * 滚动动画 GSAP
 * */

import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";


/**
 * @Description: 动画隐藏函数
 * @author: RW Wu
 * @date 2021/8/27
 */

const hide = (elem) => {
  gsap.set(elem, {autoAlpha: 0})
}

/**
 * @Description: 动画运动函数
 * @author: RW Wu
 * @date 2021/8/27
 */
function animateFrom(elem?, direction?, duration?) {
  direction = direction || 1
  duration = duration || 2
  let x = 0,
    y = duration * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: duration,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

const registerGsap = (dom) => {
  gsap.registerPlugin(ScrollTrigger)


  gsap.utils.toArray(dom).forEach((elem) => {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: () => {
        animateFrom(elem)
      },
      onEnterBack: () => {
        animateFrom(elem, -1)
      },
      onLeave: function () {
        hide(elem)
      } // assure that the element is hidden when scrolled into view
    });
  });
}

const test = () => {
  return '测试函数'
}

export {
  registerGsap,
  test
}
