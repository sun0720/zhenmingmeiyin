// 移动端菜单切换
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });

    // 点击菜单链接后关闭菜单
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  // 联系我们表单处理
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !message) {
        alert("请填写必填项（姓名、电话、留言内容）");
        return;
      }

      // 简单验证手机号
      if (!/^1[3-9]\d{9}$/.test(phone)) {
        alert("请输入正确的手机号码");
        return;
      }

      // 模拟提交成功
      alert("感谢您的留言！我们会尽快与您联系。");
      this.reset();
    });
  }

  // 滚动时导航栏效果
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.background = "#ffffff";
    }

    lastScroll = currentScroll;
  });

  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
