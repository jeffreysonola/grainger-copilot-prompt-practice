# Grainger Copilot Prompt Practice

A static, responsive practice site for Grainger sales teams, modeled on the supplied CCBA site's Start Here and exercise-navigation flow.

## Open

Open `index.html` in a modern browser. No installation, build, account connection, or backend is required. Copy buttons use the browser clipboard when permitted and offer a manual-copy dialog otherwise.

Repository: https://github.com/jeffreysonola/grainger-copilot-prompt-practice

GitHub Pages publishes the root of `main` at https://jeffreysonola.github.io/grainger-copilot-prompt-practice/. The site is public and contains workshop content and branding, not customer workbooks or account data. To update it, commit and push changes to `main`.

## Content status

Content is based on the updated, readable `Copilot Participant Guide.docx` supplied by the user, with requested workshop adaptations. The site includes nine sections: Personalization; Copilot Chat; Outlook; Teams; PowerPoint; Excel forecasting; Excel partner analysis; Agents; and Researcher. Its 18 copyable cards include the retained guide prompts, the optional Reflect self-coaching prompt at the end of activity 2, the PowerPoint sales journey prompt, the revised Outlook action prompt, personalization starter instructions, agent name, description, and instructions, and the Researcher comparison prompt. Retained prompt wording has normalized typography. Learning-focus labels, reflection questions, setup cautions, and live-demo overviews are website additions. Sections have no fixed timing so the session can flow at the facilitator's pace.

Researcher is activity 9. It reuses the exact State of Virginia question from activity 1a through a shared prompt string, with capability overviews and source-verification questions. The capabilities summary is grounded in [Microsoft's Researcher documentation](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-researcher-in-microsoft-365-copilot): multi-step research, web and permissioned work sources, clarification, and structured cited reports. Availability depends on licensing and organizational settings.

Teams is section 4 and PowerPoint is section 5, before both Excel sections. Both retain live-demo topic overviews; PowerPoint also includes a copyable prompt about Grainger's sales journey using recent public sources. Teams covers meeting management, catching up on meetings, and practical tips. Outlook has four steps; the writing-style step explicitly directs participants to Copilot Chat, and the final step helps them start the work. The three refinement prompts and original steps 5 and 6 are omitted. Required workbooks and the approved presentation template are not included; participants or the presenter must supply authorized copies. The guide itself is not published with this site.

Edit `exercises.js` to replace the prompts. Keep each exercise's unique `id`, title, description, learning focus, app, setup, prompts, and reflection questions. Hash links support direct access to each exercise.

## Branding and behavior

- Logo: supplied uploaded Grainger image, copied to `assets/grainger-logo.png`.
- Light-theme brand overrides: Grainger red `#BE0825`, black `#000106`, deep red `#790D19`, gray `#505153`, and light neutral `#F2F1F0`, from the supplied guide.
- The base theme tokens support light/dark mode. Grainger-specific overrides are centralized in `styles.css`.
- Theme follows system preference initially; the toggle preserves the choice in the URL (`?scoutTheme=light` or `?scoutTheme=dark`).
- No analytics, external fonts, third-party scripts, customer-data collection, or automatic Copilot submissions.
- Opening Copilot launches a separate tab. Availability of features depends on organizational licensing, permissions, and policy.

## Checks

Run `node --test tests\content.test.cjs` to validate the exercise schema, route uniqueness, prompt count, brand asset, and required page wiring. Browser checks cover navigation, copying, theme switching, and responsive layouts.
