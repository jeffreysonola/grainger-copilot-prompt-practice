const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const context = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "exercises.js"), "utf8"), context);
const exercises = context.GRAINGER_EXERCISES;

test("Start Here and 9 complete, uniquely routed activities", () => {
  assert.equal(exercises.length, 10);
  assert.equal(exercises[0].id, "start");
  assert.equal(new Set(exercises.map(item => item.id)).size, exercises.length);
  for (const [index, exercise] of exercises.entries()) {
    for (const key of ["id", "title", "subtitle", "heading", "description", "skill", "focus", "app"]) {
      assert.equal(typeof exercise[key], "string", `${exercise.id}: ${key}`);
      assert.ok(exercise[key].trim().length > 0);
    }
    assert.match(exercise.id, /^[a-z0-9-]+$/);
    if (!index) continue;
    assert.ok(!Object.hasOwn(exercise, "minutes"));
    if (exercise.liveDemo) {
      assert.equal(exercise.prompts.length, exercise.id === "powerpoint" ? 1 : 0);
      assert.equal(exercise.reflection.length, 0);
      assert.ok(exercise.topics.length >= 2);
      assert.match(exercise.description, /This will be a live demo portion/);
      assert.ok(!Object.hasOwn(exercise, "setup"));
      for (const topic of exercise.topics) {
        assert.ok(topic.title.length > 5);
        assert.ok(topic.text.length > 50);
      }
    } else {
      assert.ok(exercise.setup.length > 20);
      assert.ok(exercise.prompts.length >= 1);
      assert.equal(exercise.reflection.length, 3);
    }
    for (const prompt of exercise.prompts) {
      assert.ok(prompt.title.length > 5);
      assert.ok(prompt.text.length > 20);
    }
  }
});

test("18 prompts with only the intentional Researcher comparison duplicate", () => {
  const prompts = exercises.slice(1).flatMap(item => item.prompts.map(prompt => prompt.text));
  assert.equal(prompts.length, 18);
  assert.equal(new Set(prompts).size, prompts.length - 1);
  const research = exercises.find(item => item.id === "research-prioritize-prepare");
  const researcher = exercises.find(item => item.id === "researcher");
  assert.equal(researcher.prompts[0].text, research.prompts[0].text);
  assert.match(researcher.prompts[0].text, /State of Virginia/);
  assert.match(researcher.prompts[0].note, /Researcher agent, not standard Copilot Chat/);
  assert.equal(researcher.topics.length, 3);
  assert.equal(exercises[9].id, "researcher");
  assert.doesNotMatch(JSON.stringify(exercises), /CCBA|Coca-Cola/i);
});

test("PowerPoint preserves the live demo and includes the exact sales journey prompt", () => {
  const activity = exercises.find(item => item.id === "powerpoint");
  assert.equal(activity.liveDemo, true);
  assert.equal(activity.topics.length, 2);
  assert.equal(activity.prompts[0].text, "Create a presentation about Grainger's sales journey: how it attracts, serves and keeps its customers. Cover how its business models shape the way different customers buy, and the role of its sellers, digital channels and services in building long-term relationships. Use recent public sources.");
});

test("activity 2 ends with the optional Reflect self-coaching prompt", () => {
  const activity = exercises[2];
  assert.equal(activity.id, "research-prioritize-prepare");
  const prompt = activity.prompts.at(-1);
  assert.equal(prompt.title, "Reflect");
  assert.equal(prompt.kind, "Optional");
  assert.match(prompt.note, /self-coaching partner/);
  assert.equal(prompt.text, "Look at how I've worked over the last 30 days across my calendar, email, chats, and files. Start with what I'm doing well as a seller. Then find 2 or 3 habits where a small change would give me more time with customers or help me move deals forward faster. For each one, show me what you saw, why it matters, and one thing I can try this week.");
});

test("all application element references exist and script order is correct", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  for (const match of app.matchAll(/byId\("([^"]+)"\)/g)) {
    assert.ok(html.includes(`id="${match[1]}"`), `Missing element: ${match[1]}`);
  }
  assert.ok(html.indexOf('src="exercises.js"') < html.indexOf('src="app.js"'));
  assert.match(html, /Your participant-guide playbook/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.doesNotMatch(html, /id="duration"/);
  assert.doesNotMatch(app, /MIN PRACTICE|exercise\.minutes/);
});

test("guide workflow dependencies and scenario details are preserved", () => {
  const ids = exercises.map(item => item.id);
  assert.deepEqual(Array.from(ids), [
    "start", "personalization", "research-prioritize-prepare", "outlook",
    "teams", "powerpoint", "excel-forecast", "excel-partners", "agents", "researcher"
  ]);
  assert.equal(exercises.find(item => item.id === "powerpoint").liveDemo, true);
  const teams = exercises.find(item => item.id === "teams");
  assert.equal(teams.liveDemo, true);
  assert.equal(teams.topics.length, 3);
  assert.ok(ids.indexOf("excel-partners") < ids.indexOf("agents"));
  const outlook = exercises.find(item => item.id === "outlook");
  assert.equal(outlook.prompts.length, 4);
  assert.equal(outlook.prompts.filter(item => item.kind === "Follow-up").length, 0);
  assert.match(outlook.prompts[1].note, /Run this step in Copilot Chat itself/);
  assert.equal(outlook.prompts[3].title, "4. Help me start doing the work");
  assert.match(outlook.prompts[3].text, /initial draft or outline/);
  assert.doesNotMatch(JSON.stringify(outlook), /Refine it:|Move from inbox to calendar|Zoom out: Manage my day|six steps/);
  const forecast = exercises.find(item => item.id === "excel-forecast").prompts[0].text;
  for (const detail of ["November and December 2026", "Row 45", "Row 83", "V:AK"]) {
    assert.ok(forecast.includes(detail));
  }
  const agents = exercises.find(item => item.id === "agents");
  assert.equal(agents.prompts.length, 4);
  assert.match(agents.prompts[2].text, /A blank field means "not documented," not "no."/);
});

test("local logo exists and Grainger brand colors are defined", () => {
  const logo = fs.readFileSync(path.join(root, "assets", "grainger-logo.png"));
  assert.equal(logo.subarray(1, 4).toString(), "PNG");
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  for (const color of ["#be0825", "#000106", "#790d19", "#505153", "#f2f1f0"]) {
    assert.ok(css.includes(color));
  }
  assert.match(css, /\[hidden\]\s*\{\s*display:\s*none !important/);
});
