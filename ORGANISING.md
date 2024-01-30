<!--
 LAST UPDATED: 2024-01-29

 WITH THANKS TO (in chronological order):
 * Wen Kokke
 * Simon Fowler
 * Sam Lindley
 * Andre Videla
 * Thomas E. Hansen
-->

# Rough guide for organising SPLS

What follows is a rough guide for organising SPLS. It is meant to provide
guidance for how to plan and organise SPLS, but it is by no means absolute;
please feel free to discard as much (or as little) of the advice as you want.


## The date

You'll need to settle on a date. You can use scheduling tools to do this, but
it is usually better to just pick one; SPLS happens frequently enough that
missing one doesn't matter too much (the aim is to meet three times per year in
February, June, and October, but we sometimes deviate from this schedule, e.g.
due to pandemics or planning). Make sure to avoid overlapping with other
Scottish PL events and PL conferences. Ideally, also avoid the submission
deadlines of major PL conferences. It is probably wise to keep at least ICFP,
OOPSLA, PLDI, and POPL deadlines in mind.


## Duration

SPLS usually takes up half a day, starting with lunch at around noon, and ending
with dinner and a pub social. Talks usually last 20-30 minutes (20 minutes with
time for questions and changeover), with the exception of the invited speaker
(if any), who might talk for longer.


## The website

You'll need to update the [SPLS website][spls-website]. This was previously
hosted as its own thing, but it is now a subsection of the Scottish PL Institute
(SPLI). If you are not already a member, you'll need to be added to the
[SPLI organisation][spli-github]
on GitHub; try asking the organisers of the previous SPLS to add you.

Once you are a member you should have push-access to the
[SPLS repository][spls-repo].
Now:

1. Clone this repository ([scottish-pl-institute/spls][spls-repo]) and `cd` to
   it.
2. Create a subdirectory for your meeting under `meetings/<year>/<month>/`,
   replacing `<year>` with the year of the SPLS and `<month>` with the name of
   the month of the SPLS. (See previous entries if you are uncertain about the
   format).
3. Copy the previous SPLS `index.html` to your new subdirectory. We try to be
   consistent in the look and feel of the pages, but with varying success.
4. Update the new `index.html`:
   - Remove the talks, but maybe keep one in a HTML comment (`<!-- -->`) as a
       note for how to add them.
   - Update the logo and name of your institution, as well as any supporting
       bodies who are sponsoring the SPLS (e.g. SICSA).
   - Update the date and time on the page to match what you have scheduled.
5. On the main page:
   - Move the previous meeting from 'forthcoming' to 'previous'.
   - Add a link to your meeting's page under 'forthcoming'.


## The announcement

You'll need to announce your SPLS. There are two places where you should
announce an SPLS meeting:

1. The [SPLS mailing list][spls-mailing-list].
2. The [SPLS Zulip][spls-zulip].
   - Create a new stream for your event, for example `#spls-2024-03`.

You should include a registration form of some sort with your announcement,
asking:

* Does the person want to attend?
* Does the person want to give a talk?
* And, for in-person events:
  - Does the person want to join for lunch?
  - Does the person have any dietary restrictions?
  - If happening: Does the person want to join for dinner?

Anecdotally the most effective way of obtaining a response from the most people
about attendance is to use a lightweight service such as [Doodle][doodle]
(anything more heavyweight and many people are unlikely to respond). As well as
being lightweight, systems like Doodle are also helpful for communicating to
other attendees who else is coming and roughly how many people plan to attend.


## The programme

* Sometimes we receive lots of talk proposals; sometimes not. If there are too
    many proposals, then you can use your discretion to curate the programme.
    Ideally the programme should be diverse across multiple dimensions:
    affiliation, seniority, topic, theory vs. practice, etc. PhD students should
    be encouraged to speak as should speakers from industry. Those who have
    offered talks at previous meetings, but who were unable to give them because
    the programme was full should be prioritised.
* If you receive too few proposals then send out another reminder in good time.
    It is worth contacting people individually, particularly if you know they're
    working on an area that is likely to be of interest to the SPLS community.
* Once you have a few talk proposals, you can start putting together a
    programme. As mentioned earlier, talks should be roughly half an hour each,
    including questions, and there should be breaks every two to three talks.
* You will also need to organise session chairs to keep time and ask questions
    if none are forthcoming. Typically, the organisers will chair some sessions.
* Invited speakers aren't necessary, but if there are visiting researchers in
    Scotland at the time of SPLS (e.g. SICSA Distinguished Visiting Fellows),
    it is a good idea to invite them.
* When held in-person, SPLS is typically an afternoon event starting with lunch.
    Sometimes the programme has extended a little into the morning, but it is
    important not to start too early in order to allow people to travel to the
    meeting in good time (ideally off-peak).
* When held online it is best to err on the side of a shorter programme and to
    keep sessions short (ideally no more than 60 minutes with 30 minute breaks
    in between) in order to reduce digital fatigue.

**Make sure to put your programme up on the website!**


## The place

There's a big difference between *in-person* and *online* events.

### In-Person

The in-person meetings are hosted on the premises of the organising university.
They start with a catered lunch and end with a dinner and pub social.

1. Make a room booking with your university.
2. Ensure you have funding for catering (lunch and coffee breaks). Your
   university admin staff should be able to get you quotes. In the past,
   attendance has been around 60 people. The best funding route is via SICSA
   [theme event funding][sicsa-theme].
   If SICSA do not have funding, then it may be the case that your institution
   has some funding available, or you can try asking someone at your institution
   who holds an SPLS-aligned research grant. Make sure you acknowledge funders
   on relevant materials (website, signage, etc.)
3. Make a lunch booking with your university catering --- make sure to pass on
   any dietary restrictions.
4. Make a dinner reservation --- Decide on a restaurant, reach out to the
   restaurant to ask whether they can cater to people with the indicated dietary
   restrictions, and make a reservation for the number of people who have
   registered for dinner.

### Online

Online meetings are hosted using a teleconference service (e.g. Teams, Zoom,
Jitsi, etc) and live-streamed via the SPLS
[YouTube channel][spls-youtube].
Breaks and the post-seminar social take place in the SPLS pub on
[Gather Town][spls-gather-town].
(The Gather Town link isn't published here, since the link itself provides
access to the room. Ask the organisers of the previous online SPLS for the
link.) After each talk, questions may be asked either directly via the
teleconferencing service, or via the stream on Zulip. (You will need to create a
fresh topic for each talk and monitor these if you are chairing the talk.) When
asking questions via text chat, participants should be instructed to use the
following convention:

* If you would like to read out your question yourself (by unmuting), then
    prefix it with "Q:".
* If you would like the chair to read it out, then prefix it with "SQ:" (silent
    question).


## Template todo-list

Here is a template for all the steps you need to take in order to organise the
online version of SPLS, along with rough guidelines for when these steps should
be taken.

### 4 weeks prior

- [ ] Check deadline for ICFP
- [ ] Check deadline for OOPLA
- [ ] Check deadline for PLDI
- [ ] Check deadline for POPL
- [ ] Decide on the schedule
- [ ] Update the website with a new page for the event
   - [ ] Insert the schedule with placeholders
- [ ] If online:
  - [ ] Get access to Zoom or other distribution platform
  - [ ] Get access to Gather
- [ ] Get access to YouTube

### 2 weeks prior

- [ ] Obtain title and abstract from invited speaker (if any)
- [ ] Obtain title and abstract from the volounteered speakers
   - [ ] Get abstract and title from speaker 1
   - [ ] Get abstract and title from speaker ...
   - [ ] Get abstract and title from speaker n
- [ ] Update website with speaker info
   - [ ] Update abstract and title from invited speaker
   - [ ] Update abstract and title from speaker 1
   - [ ] Update abstract and title from speaker ...
   - [ ] Update abstract and title from speaker n
- [ ] Write reminder to the mailing list
- [ ] Write reminder on the Zulip server

### A couple of days prior

- [ ] Send reminder email
- [ ] Send reminded to SPLS-Zulip
- [ ] Ask speakers about pre-meeting by email
- [ ] Ask speakers about pre-meeting on Zulip
- [ ] Make sure appropriate display adapters, dongles, etc. are available if
    need be. They are likely already in the lecture room, but might need
    requisitioning depending on your university.

### On the day of the event

- [ ] **If in-person**
  - [ ] Check the audio-visual setup, make sure you know how to change input
      sources etc. for switching speakers.

- [ ] **If Online**
  - [ ] Check the speaker's setup, confirm their preferences for: streaming,
      recording, questions (do they want the host to relay questions from the
      chat or will they pick questions themselves? Do they want the audience to
      interrupt the talk or would they rather have the questions be held until
      the end?)

- [ ] If ther are any online integrations, send the links ~30m before the event.

### For each talk during the event

- [ ] Create a new thread in the channel for the event.
- [ ] Start the YouTube stream.
- [ ] Share the YouTube stream on the SPLS thread for the talk.


[spli-github]: https://github.com/scottish-pl-institute
[spls-repo]: https://github.com/scottish-pl-institute/spls
[spls-website]: https://scottish-pl-institute.github.io/spls
[spls-zulip]: https://spls.zulipchat.com/
[spls-mailing-list]: mailto:spls@lists.cent.gla.ac.uk
[old-spls-website]: https://spls-series.github.io/
[spls-youtube]: https://www.youtube.com/channel/UCBcLg-U3OjT49mC3xV7gGWA
[spls-gather-town]: https://gather.town
[doodle]: http://doodle.com/
[sicsa-theme]: https://www.sicsa.ac.uk/research/theory-modelling-computation/

