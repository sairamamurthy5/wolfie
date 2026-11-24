# Hybrid Office Team Game Mechanics and Existing Products (beyond Werewolf and Treasure Hunts)

Research date: 2026-11-24. Scope: game formats and mechanics for hybrid (in-office plus remote) teams, the commercial landscape, links to real work, hybrid fairness, and cadence. Context: improving "Wolf and Treasure" for a small Indian tech company (staff plus interns).
Method note: about 17 web searches/fetches. Many results were vendor pages or third-party aggregators, so the strength of the evidence is flagged throughout. One fetch (cityam.com, an article on playing "The Traitors" at work) failed because the session network blocks that host, so only its search snippet is used.

---

## 1. Weaknesses of Werewolf/Mafia and treasure hunts at work, and cooperative or semi-cooperative alternatives

### Takeaway
Werewolf is built on deception and player elimination. Players describe it leaving people angry, and players who are "killed" feel they lost even when their team wins. Both are risky for a workplace where trust and inclusion matter. The best-documented fixes come from game design: keep eliminated players in the game (Blood on the Clocktower's "ghost vote"), or make the game fully cooperative with limited communication (Hanabi, The Mind). There is almost no rigorous research on what Werewolf does to workplace teams.

### Cited Findings
- Werewolf is described as "based on deception, deduction and discussion" and vendors pitch it as team building where colleagues learn each other's traits. The evidence is vendor marketing — [Brightful](https://brightful.me/blog/werewolf-teambuilding); [TeamBuilding.com](https://teambuilding.com/blog/werewolf-game-rules); Confetti sells a hosted "Virtual Werewolf" — [Confetti](https://withconfetti.com/product/virtual-werewolf)
- A write-up describes Werewolf as a game that "favors deception and cunning, and it leaves many players reeling with anger and frustration" — [Search summary of a werewolf reflection; source list incl. Medium/Josh Kerr](https://medium.com/josh-kerr/werewolf-324ed391b6e4) (attribution to the exact page in the search result was ambiguous; treat as anecdotal)
- An economics blogger observed that Werewolf players "feel like they lose if they die, even if the werewolf team wins," which shows the problem with elimination — [EconLib](https://www.econlib.org/?p=15285)
- A university course reflection says players build trust with others in order to use them later ("builds trust with that person so that I have an ally in the future"), and that the game is about "figuring out how to get people to trust you" — [Miami University tabletop course blog](https://sites.miamioh.edu/tabletop/?p=3381)
- An academic paper on using social deception games to teach small-group communication exists (Tilton, SAGE Open, 2019), but its findings were not retrieved — [search result citation only]
- **Blood on the Clocktower (BotC) fix for elimination:** dead players lose their ability but can still talk, and they keep one final vote for the rest of the game. The vote token is removed once used — [BotC Wiki: Rules Explanation](https://wiki.bloodontheclocktower.com/Rules_Explanation); [Wikipedia](https://en.wikipedia.org/wiki/Blood_on_the_Clocktower)
- BotC strategy guide: "since the dead will outnumber the living, it will be they who decide the fate of the game." Living players are encouraged to talk to dead players and share information with them — [BotC Wiki: Player Strategy](https://wiki.bloodontheclocktower.com/Player_Strategy)
- The BotC "Ferryman" character gives all dead players their vote tokens back on the final day — [BotC Wiki: Ferryman](https://wiki.bloodontheclocktower.com/Ferryman)
- **Fully cooperative alternatives that rely on limited communication:** in Hanabi, players see teammates' cards but not their own, and they may communicate only through 8 limited hint tokens. Actions become implicit signals that require "theory of mind" — [The Hanabi Challenge (Bard et al., 2019, arXiv)](https://ar5iv.arxiv.org/html/1902.00506)
- In The Mind, the team plays cards in ascending order and "you can't signal in any way to the other players," a cooperative game that "doesn't allow cooperation" in the usual sense — [Game Informer, 2018](https://gameinformer.com/column/top-of-the-table/2018/09/07/the-mind-a-cooperative-game-that-doesnt-allow-cooperation)
- Office version of hidden-role play: a "Traitors"-style game ran for three weeks in an office (via Slack "chat murders" and office missions). Staff who chose not to play could still follow along in a Slack channel — [City AM (snippet only; fetch blocked)](https://www.cityam.com/?p=2301881)
- Treasure hunts and scavenger hunts are usually sold as single events. Goosechase's official site lists "single-experience pricing" separately, and annual subscriptions require a quote — [Goosechase pricing](https://www.goosechase.com/pricing/); [Goosechase subscriptions](https://goosechase.com/pricing/subscriptions)

### Inferences
- Concrete design changes for "Wolf and Treasure":
  1. **No full elimination.** Use BotC-style "ghosts" who keep talking, keep one decisive vote, or become "archivists" who can hand clues to living players. This removes the boredom and "I lost" feeling.
  2. **Move deception from people to the puzzle.** Make the "wolf" a non-player character or a system-driven "saboteur event". Alternatively, make the traitor role opt-in, short (one round or one week), and reward it for creative misdirection rather than lying about colleagues. The aim is to keep the deduction without damaging trust.
  3. **Cooperative cores with limited information** (Hanabi or The Mind style). Each player holds a fragment of the evidence, the team must pool it under a "hint budget", and the result is team-wide wins rather than individual knockouts.
- Pure deception games reward confident talkers. Moving accusations or votes into async text (Slack, browser) with a time window dilutes the advantage of the loudest person in the room. This is inferred from the office Traitors-via-Slack format; no study found.

### Gaps
- No peer-reviewed study found on Werewolf or Mafia's effect on workplace trust or psychological safety. Tilton (2019) findings not retrieved.
- No hard data found on dominant-talker effects or player-count minimums at work. From general knowledge, Werewolf typically needs roughly 7+ players, but this was not verified in this session.
- The Resistance, Secret Hitler, Among Us, Codenames and Spaceteam were not researched in detail (tool budget). From general knowledge (unverified here), The Resistance and Avalon have no player elimination and use team-mission voting, which is a useful model for "keep everyone in".

---

## 2. Mechanics from successful games that suit offices (async daily puzzles, ARGs, escape rooms, coop, assassin, quiz)

### Takeaway
The strongest transferable mechanics are: (a) **one shared puzzle per day**, the same for everyone, which takes about 3 minutes and is shareable (Wordle); (b) **collective-intelligence ARGs** that mix online clues with physical locations, where designers adapt the story to what players do (I Love Bees); (c) **escape-room-style timed team puzzles**, which reviews find enjoyable and motivating, but with weak evidence of learning beyond self-report; (d) **long-running background games** (spoon Assassin, office Traitors) running over weeks with an opt-in spectator channel.

### Cited Findings
**Async daily puzzle (Wordle):**
- Wardle called the breakthrough limiting players to one game per day, which enforced scarcity. It was partly inspired by NYT Spelling Bee's one-puzzle-per-day format. He said it encourages players to spend "three minutes a day" — [Wikipedia: Wordle](https://en.wikipedia.org/wiki/Wordle); [NPR, 2022](https://www.npr.org/2022/01/12/1071840091); [Boston.com, 2022](https://www.boston.com/news/national-news/2022/01/04/he-made-wordle-for-his-partner-now-its-an-online-hit/)
- Northeastern researchers: the "slow drip" of puzzles keeps players returning day after day — [Northeastern News, 2022](https://news.northeastern.edu/2022/01/21/what-makes-wordle-so-g-r-e-a-t/)
- The shared-puzzle point (TechCrunch interview): if everybody got a different word each day, "it wouldn't have caught on" — [TechCrunch](https://techcrunch.com/?p=2256733)
- Penn's Cait Lamberton: Wordle is "pure play". Scores aren't the point, and they "neither seal nor undermine your enjoyment" — [Penn Today](https://penntoday.upenn.edu/news/wordle-case-pure-play-cait-lamberton)

**ARGs:**
- I Love Bees (2004, Halo 2 marketing): players tracked down payphones at preset GPS locations to help a fictional character. Player counts are reported as 600,000+ or 100,000+ (sources conflict) — [Wikipedia: I Love Bees](https://en.wikipedia.org/wiki/I_Love_Bees); [42 Entertainment](https://42entertainment.com/work/ilovebees)
- Jane McGonigal's 2007 paper "Why I Love Bees: A Case Study in Collective Intelligence Gaming" argues that collective intelligence spontaneously arises among collaborative players. Developers adapted the story to player actions — [Boing Boing summary, 2008](https://boingboing.net/2008/02/21/collective-intellige.html); [SlideShare summary](https://www2.slideshare.net/dlivingstone/why-i-love-bees-ar-gs-and-collective-intelligence)
- Counterpoint: the model is "not a hive mind". It thrives on diversity and assumes each member has something unique to share — [MIT Technology Review, 2004](https://www.technologyreview.com/2004/12/03/231910/chasing-bees-without-the-hive-mind/amp/)
- Corporate ARG (Constellation Wines): a three-week ARG reinforced product knowledge, selling skills and networking through team play, collected clues, and online plus on-site play, ending at a national sales meeting. About 84% of the sales force participated voluntarily and asked for more. These results were reported by the vendor — [eLearning Industry: 6 ARG examples](https://elearningindustry.com/alternate-reality-game-examples-using-args-corporate-training); [eLearning Industry: ARGs for corporate training](https://elearningindustry.com/alternate-reality-games-for-corporate-training)
- Warwick Business School's "Spring Revival" ARG (by HT2) used a fake company website, virtual employee emails, live phone lines and actors — [eLearning Industry](https://elearningindustry.com/alternate-reality-game-examples-using-args-corporate-training)
- ARG design advice: start with a business or learning goal, and provide alternatives for people who can't do physical tasks (injury, disability) — [eLearning Industry](https://elearningindustry.com/alternate-reality-game-benefits-organization)

**Escape rooms (incl. digital):**
- Healthcare systematic review (2023): escape rooms were enjoyable and affected cognitive, psychomotor, non-technical and affective outcomes. Comparison with conventional teaching was inconclusive because there were few RCTs — [PubMed 37924674](https://www.pubmed.gov/37924674/)
- 2024 scoping review (crew resource management): 12 studies measured teamwork, mostly at reaction level (Kirkpatrick level 1). The effect was "overtly positive", but study quality was low (mean MERSQI 7.0) and design features could not be linked to outcomes — [PMC11290095](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11290095/)
- A review of 68 studies found a positive impact on motivation and soft skills — [Springer/BMC Med Educ 2024](https://link.springer.com/article/10.1186/s12909-024-05753-z)
- A systematic review of digital escape rooms covers learning goals, educator roles and teamwork/communication — [Sustainability 2021, doi:10.3390/SU13084587](https://doi.org/10.3390/SU13084587)

**Assassin/Killer office game:**
- A referee (who does not play) assigns each player a secret target. Each player carries a visible spoon and is "vulnerable" when not holding it. A tagged player passes their target on to the assassin, and the last player standing wins. Rulesets ban real violence — [Wikipedia: Assassin](https://en.wikipedia.org/wiki/Assassin_(game)); [Saratoga Falcon](https://saratogafalcon.org/2847/news/buzz-spoon-wielding-assassins-kill-prize-money/); [EPFL wiki rules](https://wiki.epfl.ch/ingmar.weber/assassins)

### Inferences
- **Daily layer:** a 3-minute, same-for-everyone "Case of the Day" (a clue, a code snippet, a company-trivia cipher) with a shareable spoiler-free result grid. This copies Wordle's scarcity and shared-puzzle mechanics.
- **Weekly/seasonal layer:** a mini-ARG "season" (3–4 weeks, like Constellation's) where clues are hidden in the office (QR codes, posters), in the intranet and in Slack, and the story adapts to what players find. The season ends at an all-hands or monthly event.
- Assassin's "target chain" can become a **non-violent "secret mission" mechanic**. Each person is secretly assigned a colleague to do something for (learn their project, get them to explain a concept, pair on a task). Completion is confirmed by the target, which turns "elimination" into cross-team connection. This is a design idea; no source tested it.
- Escape-room evidence supports "fun and motivating" claims, not proven skill transfer. If learning is a goal, include a short debrief and an explicit link to learning goals (the 2024 review flags poor alignment reporting).

### Gaps
- NYT Games (Connections, Strands), GeoGuessr challenge links, Jackbox, Kahoot quiz mechanics and Among Us were not researched individually due to tool budget.
- No primary corporate ARG outcome study with independent evaluation found. All corporate ARG results are vendor-reported.

---

## 3. Commercial workplace engagement/team-building platforms (features, pricing, praise, complaints, gaps)

### Takeaway
The market splits into (a) Slack/Teams bots for light-touch pairing and trivia (Donut, Water Cooler Trivia, Trivia app, QuizBreaker), (b) hosted live events priced per person (Confetti), (c) quiz and scavenger platforms (Kahoot! 360, Goosechase), and (d) virtual offices (Gather). Pricing is opaque or conflicting across sources. Complaints centre on cost, per-head pricing that penalises small teams, and one-off events. None found combines persistent narrative deduction, links to real work and learning, and leadership recognition. That combination is the gap.

### Cited Findings
- **Donut (Slack):** the free tier includes Intros (random pairing), calendar/Zoom integration and recognition points. Standard adds multi-channel use, Celebrations, HRIS sync and gift cards. Premium adds peer Shoutouts. Pricing is based on the number of people receiving Intros, Watercooler topics or Celebrations. Prices conflict: "Standard from $74/month billed annually; Premium from $119/month" (Matter, Sep 2026) vs. older G2 data (free up to 24 people per round in 1 channel; Standard from $49/month) — [Donut pricing](https://www.donut.com/pricing); [Matter blog, 2026](https://matterapp.com/blog/slack-apps-for-employee-engagement); [G2 Donut](https://www.g2.com/products/donut)
- **Water Cooler Trivia:** G2 vendor-supplied tiers: Office $100/mo, Company $250/mo, Enterprise $500/mo. G2 notes the profile has been unmanaged for over a year, so these may be stale — [G2 pricing](https://www.g2.com/products/water-cooler-trivia/pricing); [WCT pricing page](https://www.watercoolertrivia.com/pricing)
- **Trivia (Slack/Teams app, a different product):** Standard $1/user/mo, Pro $2/user/mo, Enterprise on request, with a $29/mo minimum. One G2 reviewer complained of price changes with little notice — [G2 Trivia pricing](https://www.g2.com/products/trivia/pricing); [Capterra](https://www.capterra.co.uk/software/1012936/trivia)
- **QuizBreaker:** no public pricing on G2 — [G2](https://www.g2.com/products/quizbreaker/pricing)
- **Kahoot! 360 Spirit (workplace):** listed at $20/mo ($240/yr) with a 25-licence minimum, hosting up to 2,000 participants per session. Enterprise is custom. Pricing pages are inconsistent across locales — [Kahoot 360 Spirit](https://kahoot.com/business/360-spirit); [Kahoot pricing](https://www.kahoot.com/pricing); [Enterprise](https://kahoot360.com/en-GB/enterprise-plans/)
- **Confetti (hosted virtual/hybrid events):** Capterra lists pay-per-event pricing from $30/user, plus an annual "Pre-Fund" plan from $5,000. A third-party estimate puts hosted games at about $7/person and most experiences at $20–85/person. Capterra rating 4.8/5 (76 reviews). Complaints: high price, difficulty getting a preferred date, a host no-show, and per-person pricing that makes small teams pay disproportionately. Trustpilot 2.3/5, mostly over marketing emails — [Capterra Confetti](https://capterra.com/p/241168/Confetti/); [Dupple review, Jul 2026](https://dupple.com/reviews/confetti); [Software Advice reviews](https://www.softwareadvice.com/ca/hr/confetti-profile/reviews/)
- **Goosechase (scavenger or mission platform):** third parties list $99/yr Basic or $299–499 per game. The official site has single-experience pricing and quote-based annual plans. The free plan is limited (about 3 participants, 1 live experience). FitGap notes it is scoped to scavenger-hunt or mission experiences — [Goosechase pricing](https://www.goosechase.com/pricing/); [SaaSworthy](https://www.saasworthy.com/product/goosechase); [FitGap](https://us.fitgap.com/products/001951/goosechase)
- **Gather (virtual office):** $15/user/mo billed monthly or $12/user/mo billed annually, effective from the first renewal after 1 Jan 2026. Example: a 20-capacity space costs $300/mo — [Gather support: pricing changes 2025](https://support.gather.town/hc/en-us/articles/39590892978196); [Gather pricing](https://gather.town/pricing)

### Inferences
- **Gaps a custom game can fill:**
  1. **Persistence and narrative.** Most tools are one-off events (Confetti, Goosechase) or contextless trivia. A seasonal mystery with continuity is rare.
  2. **Links to real work and learning.** Trivia and pairing bots don't link to the company's own codebase, docs or learning goals. Colleague-authored puzzles would.
  3. **Leader recognition.** Donut and Bonusly-style tools recognise people through points and shoutouts, but no product found recognises *leadership behaviours* (mentoring, unblocking, organising) inside a game.
  4. **Cost for a small Indian company.** USD per-user or per-event pricing (e.g., $20–85/person for Confetti) is expensive at Indian salary levels and with interns. A self-hosted browser game avoids recurring per-head fees.
- The Donut "Intros" pairing mechanic is proven and worth copying inside the game (e.g., weekly cross-team "case partners").

### Gaps
- Not researched (tool budget): Scavify, Teamflow (reportedly pivoted or shut down; unverified), Sococo, Snack, Bonusly games, Microsoft Viva Glint/Insights, QuizBreaker features, Jackbox for teams. No India-specific platforms or INR pricing researched.
- G2/Capterra praise and complaint themes were only gathered for Confetti and Trivia.

---

## 4. Connecting the game to real work without surveillance

### Takeaway
The best evidence (Mollick & Rothbard's field experiment) shows that workplace games raise positive affect only when employees consent to them. Imposed games lower it and did not improve performance. Leaderboards drive striving even without instructions (Landers). So work-linked mechanics must be opt-in, built on what people contribute (colleague-authored puzzles, knowledge quests), and must not quietly ingest productivity metrics.

### Cited Findings
- Mollick & Rothbard, "Mandatory Fun: Consent, Gamification and the Impact of Games at Work": in a field experiment with salespeople, games increased positive affect when consented to and decreased it when consent was lacking — [SSRN 2277103](https://papers.ssrn.com/abstract=2277103)
- Same study: three groups (game; leaderboard on a big screen only; neither). The game ("Slam-Dunk") did not improve sales performance. Among non-consenters, performance declined slightly — [Wharton Knowledge](https://knowledge.wharton.upenn.edu/article/gamification-powering-game/); [Wharton Knowledge: does gamification work](https://knowledge.wharton.upenn.edu/article/people-love-games-but-does-gamification-work/)
- Landers' work (cited by Wharton): given a leaderboard, people "strive for the top of it even if you don't tell them to" — [Wharton Knowledge](https://knowledge.wharton.upenn.edu/article/people-love-games-but-does-gamification-work/)
- CMU Tepper research reports that workplace gamification can "erode moral agency" (headline only; details not retrieved) — [CMU Tepper](https://www.cmu.edu/tepper/news/stories/workplace-gamification-erodes-moral-agency)
- "Forced fun is no fun at all" — [strategy+business](https://strategy-business.com/blog/Forced-Fun-Is-No-Fun-at-All)
- The Constellation ARG tied the game to product knowledge and selling skills and was voluntary, with about 84% participation (vendor-reported) — [eLearning Industry](https://elearningindustry.com/alternate-reality-game-examples-using-args-corporate-training)

### Inferences
- Work-link mechanisms that respect consent:
  - **Colleague-authored puzzles.** Each week a different person or team writes a clue about their domain (a bug to spot, a system diagram cipher, a customer story). The author earns "Architect" XP when others solve it. This rewards knowledge sharing, not output.
  - **Learning quests.** Opt-in side quests mapped to skills (e.g., "explain our deploy pipeline to an intern") confirmed by the other person, not by tracking tools.
  - **Hackathon or bug-bash seasons.** Make an existing work event the season finale. Clues found during the season unlock hints or bonus time.
  - **Leader recognition.** A separate "Lantern" track for peer-nominated behaviours (mentored, unblocked, hosted) instead of raw XP. This separates "most active" from "most helpful".
  - **Explicit no-surveillance rule.** Do not ingest commits, tickets or attendance into the score. Data flows only from player actions in the game.
- Because leaderboards drive striving (Landers) and coercion hurts affect (Mollick), offer multiple boards (team, weekly reset, personal best, helper board). Let people hide from the public board, and never use the game for appraisals.

### Gaps
- No study found on colleague-authored puzzles or knowledge-sharing games in workplaces specifically.
- The CMU "moral agency" study details and the Landers citation were not retrieved first-hand.

---

## 5. Hybrid fairness (remote vs. in-office equality)

### Takeaway
Proximity bias, the tendency to favour people physically present, is well-documented in practitioner literature. Remote staff speak less in hybrid meetings and get left out. Standard mitigations translate directly into game rules: everyone joins through their own device, rotate times, give each physical clue a digital equivalent, and use async windows.

### Cited Findings
- In flexible work, proximity bias raises the risk that in-office workers get preferential treatment through more face time with managers — [UC Davis GSM](https://gsm.ucdavis.edu/news/what-proximity-bias)
- Meeting-specific forms: remote staff left out of invitations, and remote employees facing technical problems and contributing less in hybrid meetings — [TechTarget](https://www.techtarget.com/news/Proximity-bias-explained-Everything-you-need-to-know/871629/)
- Mitigations: every participant on their own video link even when in the same room (Atlassian), rotate meeting times (Toptal), and "if one person dials in, everyone does" (Toptal) — [Atlassian/Loom](https://www.atlassian.com/blog/loom/proximity-bias); [Toptal](https://www.toptal.com/insights/future-of-work/distance-bias/)
- More women and minority ethnic groups choose remote or hybrid work, so bias can widen existing gaps — [Atlassian/Loom](https://www.atlassian.com/blog/loom/proximity-bias); [SHRM](https://www.shrm.org/topics-tools/news/employee-relations/preventing-proximity-bias-hybrid-workplace)
- The Constellation ARG combined online and on-site play — [eLearning Industry](https://elearningindustry.com/alternate-reality-games-for-corporate-training). ARG guidance says to provide alternatives for those who can't do physical tasks — [eLearning Industry](https://elearningindustry.com/alternate-reality-game-benefits-organization)
- Goosechase is marketed as suiting hybrid work environments (third-party listing) — [SoftwareSuggest](https://www.softwaresuggest.com/goosechase/pricing)
- (Caveat: proximity-bias sources are mostly practitioner or vendor content that cites each other, not peer-reviewed research.)

### Inferences
- Fairness rules for the game:
  - **Every physical clue has a digital twin** of equal value. A QR poster in the office corresponds to an intranet or Slack "hidden page". Alternatively, physical clues can be found only by in-office players but decoded only with information held by remote players (interdependence, Hanabi-style), so each side needs the other.
  - **"Everyone on their own device" for live sessions**, including people in the same room.
  - **Async voting and deduction windows** (e.g., 24h) instead of real-time shouting matches. This also helps interns and quieter people.
  - **Mixed teams by design.** Each team must include at least one remote and one in-office player, using Donut-style pairing.
  - Rotate live-event times. For an India-based team, schedule within working hours (avoid late evenings that clash with commutes or family time; an inference, not sourced).

### Gaps
- No peer-reviewed research found on fairness in hybrid *games* specifically. No data on time-zone spread for the target company.

---

## 6. Session length and cadence

### Takeaway
The evidence supports a layered cadence: about 3 minutes daily (Wordle), multi-week seasons (the 3-week Constellation ARG, the 3-week office Traitors) ending in a live event, and short live team puzzles (escape-room style) as monthly highlights.

### Cited Findings
- Wordle: one puzzle a day, about 3 minutes, and the scarcity drives return visits — [Wikipedia: Wordle](https://en.wikipedia.org/wiki/Wordle); [Northeastern News](https://news.northeastern.edu/2022/01/21/what-makes-wordle-so-g-r-e-a-t/)
- Corporate ARG ran three weeks and ended in a live national sales meeting — [eLearning Industry](https://elearningindustry.com/alternate-reality-games-for-corporate-training)
- An office "Traitors"-style game ran for three weeks, with non-players spectating in Slack — [City AM (snippet)](https://www.cityam.com/?p=2301881)
- Kahoot! 360 Spirit supports up to 2,000 participants per live session, suited to all-hands quiz moments — [Kahoot 360 Spirit](https://kahoot.com/business/360-spirit)

### Inferences
- Recommended cadence (synthesis):
  - **Daily (2–5 min, async):** one shared "Case of the Day" puzzle, the same for everyone, with a streak and a shareable result.
  - **Weekly (20–30 min, async window plus optional live huddle):** a colleague-authored puzzle drop plus one team deduction vote, with a 24–48h window.
  - **Seasonal (3–4 weeks):** a narrative mystery arc. Evidence accumulates, and the "saboteur" or "wolf" is unmasked at the finale.
  - **Monthly or season finale (45–60 min, live hybrid):** an escape-room-style team challenge with everyone on their own device, ending with awards (XP leaders, best puzzle author, peer-voted "Lantern" leaders).
- Weekly or seasonal leaderboard resets keep newcomers and interns competitive. Long-term "hall of fame" pages preserve recognition.

### Gaps
- No empirical study found comparing cadences for workplace games. The recommendations above are a synthesis of case durations and Wordle's design, not tested benchmarks.
