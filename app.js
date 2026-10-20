(() => {
  "use strict";
  const exercises = globalThis.GRAINGER_EXERCISES;
  const byId = id => document.getElementById(id);
  let current = 0;
  let toastTimer;
  byId("activity-count").textContent = `Start here + ${exercises.length - 1} activities`;
  const nav = byId("exercise-nav");
  const buttons = exercises.map((exercise, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-item";
    const number = document.createElement("span");
    number.className = "nav-number";
    number.textContent = String(index).padStart(2, "0");
    const label = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = exercise.title;
    const subtitle = document.createElement("small");
    subtitle.textContent = exercise.subtitle;
    label.append(title, subtitle);
    button.append(number, label);
    button.addEventListener("click", () => navigate(index));
    nav.append(button);
    return button;
  });

  function notify(message) {
    clearTimeout(toastTimer);
    byId("toast").textContent = message;
    byId("toast").classList.add("visible");
    toastTimer = setTimeout(() => byId("toast").classList.remove("visible"), 3500);
  }

  async function copyPrompt(text, button) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied!";
      notify("Prompt copied. Paste it into your approved Copilot experience.");
      setTimeout(() => { button.textContent = "Copy prompt"; }, 2500);
    } catch (error) {
      console.warn("Automatic clipboard copy failed; manual copy is available.", error);
      byId("manual-copy").value = text;
      byId("copy-dialog").showModal();
      byId("manual-copy").focus();
      byId("manual-copy").select();
    }
  }

  function render(moveFocus = true) {
    const exercise = exercises[current];
    const liveDemo = exercise.liveDemo === true;
    document.title = `${exercise.title} | Grainger Copilot Prompt Practice`;
    buttons.forEach((button, index) => {
      if (index === current) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    byId("exercise-kicker").textContent = current === 0 ? "WELCOME TO YOUR PRACTICE DAY" : `${liveDemo ? "LIVE DEMO" : "EXERCISE"} ${String(current).padStart(2, "0")}`;
    byId("page-title").textContent = exercise.heading;
    byId("page-description").textContent = exercise.description;
    byId("skill").textContent = exercise.skill;
    byId("skill-description").textContent = exercise.focus;
    byId("app-label").textContent = exercise.app;
    byId("position").textContent = current === 0 ? "START HERE" : `${String(current).padStart(2, "0")} / ${exercises.length - 1}`;
    byId("landing").hidden = current !== 0;
    byId("practice").hidden = current === 0;
    byId("guide-note").hidden = liveDemo;
    byId("setup").hidden = liveDemo;
    byId("reflection").hidden = liveDemo;
    byId("demo-topics").hidden = !exercise.topics?.length;
    byId("practice-kicker").textContent = liveDemo ? "WATCH & EXPLORE" : "LEARN BY DOING";
    byId("practice-title").textContent = liveDemo ? "What we'll cover live" : "Your practice prompts";
    byId("previous").disabled = current === 0;
    byId("next").hidden = current === exercises.length - 1;
    byId("footer-position").textContent = current === 0 ? "Ready when you are." : `Exercise ${current} of ${exercises.length - 1}`;
    byId("next").textContent = current === 0 ? "Start practicing →" : "Next exercise →";
    byId("prompt-list").replaceChildren();
    byId("reflection-list").replaceChildren();
    byId("demo-topics").replaceChildren();
    if (current !== 0) {
      byId("setup").textContent = liveDemo ? "" : exercise.setup;
      if (exercise.topics?.length) {
        exercise.topics.forEach(topic => {
          const card = document.createElement("article");
          card.className = "intro-card";
          const heading = document.createElement("h2");
          heading.textContent = topic.title;
          const text = document.createElement("p");
          text.textContent = topic.text;
          card.append(heading, text);
          byId("demo-topics").append(card);
        });
      }
      exercise.prompts.forEach((prompt, index) => {
        const card = document.createElement("article");
        card.className = "prompt-card";
        const header = document.createElement("div");
        header.className = "prompt-header";
        const heading = document.createElement("h3");
        heading.textContent = prompt.title;
        const button = document.createElement("button");
        button.className = "button copy-button";
        button.type = "button";
        button.textContent = "Copy prompt";
        button.setAttribute("aria-label", `Copy prompt: ${prompt.title}`);
        if (prompt.kind) {
          const label = document.createElement("span");
          label.className = "pill outline";
          label.textContent = prompt.kind;
          header.append(label);
        }
        button.addEventListener("click", () => copyPrompt(prompt.text, button));
        const text = document.createElement("p");
        text.className = "prompt-text";
        text.textContent = prompt.text;
        header.append(heading, button);
        card.append(header);
        if (prompt.note) {
          const note = document.createElement("p");
          note.className = "tip";
          note.setAttribute("role", "note");
          note.textContent = prompt.note;
          card.append(note);
        }
        card.append(text);
        byId("prompt-list").append(card);
      });
      exercise.reflection.forEach(question => {
        const item = document.createElement("li");
        item.textContent = question;
        byId("reflection-list").append(item);
      });
    }
    if (moveFocus) {
      byId("main").focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  function navigate(index) {
    if (index < 0 || index >= exercises.length) return;
    if (location.hash === `#${exercises[index].id}`) {
      current = index;
      render();
    } else location.hash = exercises[index].id;
  }

  function syncRoute(moveFocus) {
    const id = location.hash.slice(1) || "start";
    const index = exercises.findIndex(exercise => exercise.id === id);
    current = index < 0 ? 0 : index;
    if (index < 0) {
      history.replaceState(null, "", `${location.pathname}${location.search}#start`);
      notify("That exercise was not found. Showing Start Here.");
    }
    render(moveFocus);
  }

  function updateThemeButton() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    byId("theme-toggle").setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
    byId("theme-toggle").setAttribute("aria-pressed", String(dark));
  }

  byId("theme-toggle").addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const url = new URL(location.href);
    url.searchParams.set("scoutTheme", theme);
    history.replaceState(null, "", url);
    updateThemeButton();
  });
  byId("previous").addEventListener("click", () => navigate(current - 1));
  byId("next").addEventListener("click", () => navigate(current + 1));
  window.addEventListener("hashchange", () => syncRoute(true));
  syncRoute(false);
  updateThemeButton();
})();
