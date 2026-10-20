/* Participant-guide prompts, grouped by workflow. Typography normalized for the web. */
const accountResearchQuestion = "I'm a seller at Grainger. Tell me what the State of Virginia purchased through small businesses in its prior fiscal year, broken down by agency, so I can decide where to target and understand my share of wallet. Tell me where you found this information.";
globalThis.GRAINGER_EXERCISES = [
  {
    id: "start", title: "Start Here", subtitle: "Prompting foundations",
    heading: "Start Here: Your Copilot Practice Day",
    description: "A practical, hands-on session to help Grainger sales teams use Copilot with greater clarity, confidence, and purpose in the work you already do.",
    skill: "Prompting foundations", focus: "Grounding, prompt design, iteration, and sales judgment.", app: "Microsoft 365 Copilot"
  },
  {
    id: "personalization", title: "Make Copilot work your way", subtitle: "Personalization",
    heading: "Make Copilot work your way",
    description: "Custom instructions tell Copilot how you want it to respond every time, so you don't have to repeat the same requests in every prompt.",
    skill: "Personalization", focus: "Set preferences for tone, clarity, evidence, and how you work.", app: "Copilot Personalization settings",
    setup: "Copy the starter set into the custom instructions in Copilot's Personalization settings, then edit it to fit how you work. You can also add the writing style instructions you create in Step 2 of the Outlook section.",
    prompts: [
      { title: "Starter instructions", text: "- Do not use em dashes.\n- Write in a professional but conversational tone.\n- Be direct. Put the most important information first.\n- Avoid corporate jargon and overly polished, AI-sounding language.\n- Use bullets when they make information easier to scan.\n- When summarizing, separate what I need to know from what I need to do.\n- When there are action items, clearly identify the owner and next step when that information is available.\n- When helping me prepare for a meeting, focus on the purpose, important context, decisions needed, and questions I should ask.\n- When I ask for recommendations, give me your strongest recommendation first, then alternatives if useful.\n- Do not invent facts, numbers, commitments, or customer information. Tell me when information is missing.\n- If my request is ambiguous and the answer could materially change, ask me a clarifying question.\n- Match my natural writing style when you have enough examples of my writing to do so." }
    ],
    reflection: ["Which preferences reflect how you actually work?", "What would you adjust for a customer-facing response?", "Return here after Outlook to add your writing style instructions."]
  },
  {
    id: "research-prioritize-prepare", title: "Research, prioritize & prepare", subtitle: "Copilot Chat + Work IQ",
    heading: "Research. Prioritize. Prepare.",
    description: "Research a public-sector account on the web, then have Copilot find the customer priorities that need you today and prepare you for the top one.",
    skill: "Work-grounded prompting", focus: "Connect people, meetings, and documents to find the right context.", app: "Microsoft 365 Copilot Chat",
    setup: "Start in Copilot Chat. Use web sources for the research prompt and your approved work account for calendar, email, chat, and file context. Work IQ helps connect the work you can access.",
    prompts: [
      { title: "1a. Research where an account is spending", text: accountResearchQuestion },
      { title: "1b. Prioritize my day and prep my #1 priority", text: "Help me prioritize my day as a seller. Review my calendar, emails, and recent work to identify the 3 customer or sales priorities that need my attention most today and explain why. For my #1 priority, find the most relevant emails, meetings, and files, summarize what I need to know, identify any open commitments or decisions, and recommend how I should prepare and what my next best action should be." },
      { title: "Reflect", kind: "Optional", note: "Use Copilot as a self-coaching partner: recognize what is working, spot small changes in your selling habits, and choose one practical improvement to try this week. Review the supporting work context before accepting its observations.", text: "Look at how I've worked over the last 30 days across my calendar, email, chats, and files. Start with what I'm doing well as a seller. Then find 2 or 3 habits where a small change would give me more time with customers or help me move deals forward faster. For each one, show me what you saw, why it matters, and one thing I can try this week." }
    ],
    reflection: ["Check the fiscal year and public purchasing sources.", "Public purchasing totals alone do not establish your actual share of wallet; what sales data would you also need?", "Can you trace the priority briefing back to the original emails, meetings, and files?"]
  },
  {
    id: "outlook", title: "From inbox to action", subtitle: "Outlook & email",
    heading: "From inbox overload to action",
    description: "Follow one real piece of work through four steps: prioritize, discover your writing style, draft a response, and start the work.",
    skill: "Connected communication", focus: "Draft in your voice and turn customer conversations into clear next steps.", app: "Copilot Chat with Outlook context",
    setup: "Use your own inbox in Copilot Chat. Stay in the same chat for all four steps; each builds on the last. Replace [sender] and [topic] in Step 3. Review drafts, facts, and commitments before taking action or sending anything.",
    prompts: [
      { title: "1. Prioritize my inbox", text: "Which of my unread emails are most important for me to respond to? Summarize what each person needs from me and prioritize the order I should respond. Explain why." },
      { title: "2. Discover my writing style", note: "Run this step in Copilot Chat itself, not in Outlook's email drafting pane. Continue in the same chat so you can reuse these writing instructions in Step 3.", text: "Analyze emails I've written and identify my writing style. Look at my tone, length, structure, formality, greetings, sign-offs, and how I make requests. Then give me a concise set of writing instructions I can give Copilot so it can write like me." },
      { title: "3. Draft a response that sounds like me", text: "Draft a response to the email from [sender] about [topic] using the writing instructions we just created for my style. Address what the sender is asking for, keep it concise, and make the next step clear. Don't invent information I haven't provided." },
      { title: "4. Help me start doing the work", text: "Based on this email thread, help me start doing the work. Identify anything I owe the sender, recommend the first concrete action, and help me create an initial draft or outline for that task using the information available. Flag anything you need from me rather than inventing details. Keep the next steps clear, and do not send anything or make commitments on my behalf." }
    ],
    reflection: ["Does the draft sound like you and address the customer's actual request?", "Have you reviewed all commitments and facts before sending?", "Save your writing instructions to Personalization if they are useful."]
  },
  {
    id: "teams", title: "Make meetings work for you", subtitle: "Teams · Live demo",
    heading: "Manage meetings. Catch up. Stay connected.",
    description: "This will be a live demo portion. We'll explore how Teams and Copilot can help you manage meetings, catch up on conversations, and keep customer work moving.",
    skill: "Meeting productivity", focus: "Stay focused on the conversation and turn meeting context into clear next steps.", app: "Microsoft Teams", liveDemo: true,
    topics: [
      { title: "Manage your meetings", text: "We'll look at preparing with a clear purpose and agenda, using Copilot to surface key discussion points and open questions during a meeting, and reviewing decisions, owners, and next steps afterward." },
      { title: "Catch up on meetings", text: "We'll explore meeting recap and available transcripts or recordings to catch up on a missed meeting or revisit a discussion. We'll focus on what was decided, what is still unresolved, and what needs your attention, then check the original context." },
      { title: "Practical tips within Teams", text: "We'll cover finding relevant chats and shared files, asking focused follow-up questions, and keeping actions visible in the right conversation. Copilot and recap features depend on your license, meeting settings, transcription, and permissions; always follow your organization's recording and data policies." }
    ],
    prompts: [], reflection: []
  },
  {
    id: "powerpoint", title: "Build a customer-ready deck", subtitle: "PowerPoint · Live demo",
    heading: "From brand template to customer-ready deck",
    description: "This will be a live demo portion. We'll show how Copilot can help turn source material into a clear, on-brand customer presentation.",
    skill: "On-brand storytelling", focus: "Use your template and evidence to communicate a focused recommendation.", app: "Copilot with PowerPoint creation",
    liveDemo: true,
    topics: [
      { title: "From source material to a customer story", text: "We'll demonstrate how Copilot can help shape a focused presentation around customer needs, a recommendation, and clear next steps." },
      { title: "Keep it on brand and grounded", text: "We'll explore working with an approved Grainger template and reviewing the draft for layout, clarity, and claims that need verification before sharing." }
    ],
    prompts: [
      { title: "Create a presentation about Grainger's sales journey", text: "Create a presentation about Grainger's sales journey: how it attracts, serves and keeps its customers. Cover how its business models shape the way different customers buy, and the role of its sellers, digital channels and services in building long-term relationships. Use recent public sources." }
    ],
    reflection: []
  },
  {
    id: "excel-forecast", title: "Forecast channel revenue", subtitle: "Excel · Baseline → Forecast → Explain",
    heading: "Build a year-end forecast with context",
    description: "Forecast November and December 2026 Product and Service Revenue using recent performance, seasonality, and sales days, with commentary explaining the assumptions and results.",
    skill: "Channel business forecasting", focus: "Document the baseline, exclusions, seasonality, and known changes.", app: "Excel Copilot",
    setup: "Open your channel business forecast workbook in Excel and open Copilot. Save a working copy. Confirm Product Revenue is Row 45, Service Revenue is Row 83, and Big Hits are in Columns V:AK before running. Enter known wins or expected losses, or write none. The workbook is not included with this site.",
    prompts: [
      { title: "1. Forecast November and December revenue", text: "Forecast November and December 2026 Product Revenue (Row 45) and Service Revenue (Row 83). Use the last three completed months as the baseline, exclude Big Hits in Columns V:AK, and apply historical November/December seasonality and sales days. Include any known wins or expected losses I provide, update the forecast cells, and add concise commentary explaining the assumptions and results. Known wins or expected losses: [add any, or write none]" }
    ],
    reflection: ["Were the correct completed months and exclusions used?", "Can you verify the seasonality and sales-day assumptions?", "Review changed cells and commentary before using the forecast."]
  },
  {
    id: "excel-partners", title: "Find the right partner", subtitle: "Excel · Find → Narrow → Recommend",
    heading: "From partner data to customer recommendation",
    description: "Find partners that match a customer's needs, narrow them to a shortlist, and build a recommendation report you could use in a customer conversation.",
    skill: "Evidence-based partner analysis", focus: "Compare documented capabilities and clearly flag what still needs verification.", app: "Excel Copilot",
    setup: "Open the Strategic Alliance partner workbook in Excel and open Copilot. Stay in the same conversation for all three steps. Save the recommendation report for future customer conversations. The workbook is not included with this site.",
    prompts: [
      { title: "1. Find candidates by different criteria", text: "A customer needs a Strategic Alliance partner that can provide warehousing and custom labeling. Using only this workbook, which companies list both capabilities? Show the company, relevant capabilities, location, and certifications. If a field is missing, say so rather than assuming." },
      { title: "2. Narrow the shortlist", text: "Of those companies, which could support a customer in Texas? Compare the matches side by side using their Company Overview, capabilities, location, and certifications. Separate confirmed matches from anything the workbook does not establish." },
      { title: "3. Build the customer recommendation report", text: "Scenario: A Texas-based customer needs a partner to help supply maintenance, repair, and operations (MRO) products, with warehousing, custom labeling, and kitting for delivery to multiple facilities. Build a decision-ready report using only this workbook. Rank the matching Strategic Alliance companies against those requirements; explain the pros and cons of each; include charts showing the documented criteria each company meets; and add commentary on your recommendation, tradeoffs, and what we must verify before contacting a partner. Do not invent pricing, capacity, coverage, or certifications." }
    ],
    reflection: ["Does the workbook document each capability in the recommendation?", "Remember: a company's location does not establish its service coverage.", "What must you verify before contacting a partner or sharing the recommendation?"]
  },
  {
    id: "agents", title: "Build a company finder", subtitle: "Agents · Name → Instruct → Test",
    heading: "Build a Strategic Alliance Company Finder",
    description: "Build an agent that answers questions about Strategic Alliance companies using only the partner workbook, with reusable instructions that keep answers sourced and precise.",
    skill: "Reusable agent instructions", focus: "Connect approved knowledge, set guardrails, and test the evidence.", app: "Your approved Copilot agent builder",
    setup: "Create a new agent in your organization's approved builder, connect the Strategic Alliance workbook as its knowledge, and paste the name, description, and instructions into their respective fields. Then run the test prompt. Agent creation, Excel knowledge support, sharing, and access depend on your organization's capabilities and policy. Verify source access before sharing.",
    prompts: [
      { title: "1. Agent name", text: "Strategic Alliance Company Finder", kind: "Name" },
      { title: "1. Agent description", text: "Helps Grainger's internal teams find Strategic Alliance companies and understand their documented locations, certifications, capabilities, and company overviews using only the connected Excel workbook.", kind: "Description" },
      { title: "2. Agent instructions", text: "You are the Strategic Alliance Company Finder. Help internal teams answer: \"Which Strategic Alliance companies do we have, where are they, and what can they do?\"\nUse only the connected Excel workbook. Search across its relevant tabs, including Company Overview when available. Do not use outside knowledge or other sources to complete an answer.\nFor every request:\n1. Identify the user's search criteria, such as company name, state, certification, capability, or whether the company has salespeople.\n2. Find companies with workbook evidence matching those criteria. For multi-criteria searches, distinguish companies that meet every documented criterion from those that meet only some.\n3. Lead with the answer. For each match, briefly explain which workbook details support it and show the Company Overview when available.\n4. Include only the details useful to the question. For multiple matches, use a compact comparison; for one company, provide a readable company profile.\n5. Identify the relevant tab or field for key findings so the user can check the workbook.\nBe precise about what the data means. A company's location does not establish where it can serve customers. A blank field means \"not documented,\" not \"no.\" Do not infer a capability from a company name or treat an unlisted certification as proof the company lacks it.\nIf there are no confirmed matches, say so and, when useful, show partial matches with the unmet criteria clearly marked. If the workbook cannot answer the question, explain what information is missing. Never invent capabilities, certifications, service coverage, staffing, or other company details.\nYour primary purpose is company discovery and understanding. You may compare companies when asked, but do not rank them or declare one \"best\" unless the user provides criteria and the workbook contains enough evidence to support that conclusion.", kind: "Instructions" },
      { title: "3. Test your agent", text: "A customer needs a Strategic Alliance partner that can provide warehousing and custom labeling. Which companies list both capabilities? Show the company, relevant capabilities, location, and certifications." }
    ],
    reflection: ["Does the agent identify the tab or field supporting its answer?", "Test a missing field: does it say 'not documented' instead of guessing?", "Compare the agent's answer with the Excel exercise before sharing it."]
  },
  {
    id: "researcher", title: "Go deeper with Researcher", subtitle: "Researcher agent · Deep research",
    heading: "Same question. A deeper research approach.",
    description: "Revisit the research question from activity 1a in the Researcher agent. Explore how multi-step research, multiple sources, and a structured, cited report can support a more informed customer conversation.",
    skill: "Deep research and source evaluation", focus: "Compare evidence, check citations, and distinguish findings from assumptions.", app: "Researcher in Microsoft 365 Copilot",
    setup: "Open Microsoft 365 Copilot and select Researcher under Agents, if available. Run the same question you used in activity 1a, answer any clarifying questions, and compare the resulting report with your earlier Copilot Chat answer. For this public purchasing question, focus on public web sources. Researcher availability depends on your license and your organization's settings; access to work sources follows your permissions.",
    topics: [
      { title: "Research across multiple sources", text: "Researcher tackles complex, multi-step questions by gathering, analyzing, and synthesizing information. It can use the web and, at work, accessible files, emails, meetings, and chats. Define the scope so the research stays relevant to the decision you need to make." },
      { title: "Build a structured, cited report", text: "Researcher can organize findings into a detailed report with source citations, key insights, and next steps. Reports may include visuals and charts. Use the citations to check the underlying evidence; a polished report is not a guarantee that every claim is correct." },
      { title: "Go deeper than a quick answer", text: "Standard Copilot Chat is useful for quick answers and everyday tasks. Researcher is designed for deeper, layered research and may take longer or ask clarifying questions. Compare the coverage, source quality, assumptions, and gaps rather than assuming a longer answer is better." }
    ],
    prompts: [
      { title: "Research the State of Virginia's purchasing", note: "Run this prompt in the Researcher agent, not standard Copilot Chat. It is the exact same question as activity 1a so you can compare the two approaches.", text: accountResearchQuestion }
    ],
    reflection: ["Which sources establish the fiscal year, purchasing totals, and agency breakdown, and are there gaps or conflicting definitions?", "What did Researcher add or clarify compared with activity 1a? Verify important numbers in the cited original sources.", "What additional Grainger sales data would you need to calculate actual share of wallet? Public purchasing totals alone are not enough."]
  }
];
