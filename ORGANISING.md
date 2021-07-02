# Organising SPLS

What follows is a rough guide to organising SPLS. SPLS usually takes up half a day, starting with lunch at around noon, and ending with dinner and a pub social.

## The date
You'll need to settle on a date. You can use scheduling tools to do this, but it's usually better to just pick one; SPLS happens frequently enough that missing one doesn't matter too much (the aim is to meet three times per year in February, June, and October, but we sometimes deviate from this schedule, e.g. due to pandemics or just poor planning). Make sure to avoid overlapping with other Scottish PL events and PL conferences. Ideally, also avoid the submission deadlines of major PL conferences. It's probably wise to keep at least ICFP, OOPSLA, PLDI, and POPL in mind.

## The website
You'll need to update the [SPLS website][spls-website]. If you're not already a member, you'll need to be added to the SPLS series organisation on GitHub; ask the organisers of the previous SPLS.

1. create a page for your meeting under `meetings/<year>/<month>/`;
2. on the main page:
   - move the previous meeting from 'forthcoming' to 'previous'; and
   - add a link to your meeting's page under 'forthcoming'.

## The announcement
You'll need to announce your SPLS. There are two places where you should announce an SPLS meeting:

1. the [SPLS mailing list][spls-mailing-list]; and
2. the [SPLS Zulip][spls-zulip].

For the SPLS Zulip, create a new stream for your event, e.g., `#spls-2020-10`.

You should include a registration form of some sort with your announcement, asking:

- do you want to attend?
- do you want to give a talk?
- *(if in person)*
  + do you want to join for lunch?
  + do you want to join for dinner?
  + do you have any dietary restrictions?

Anecdotally the most effective way of obtaining a response from the most people about attendance is to use a lightweight service such as [Doodle][doodle] (anything more heavyweight and many people are unlikely to respond). As well as being lightweight, systems like Doodle are also helpful for communicating to other attendees who else is coming and roughly how many people plan to attend.

## The programme

- Sometimes we receive lots of talk proposals; sometimes not. If there are too many proposals, then you can use your discretion to curate the programme. Ideally the programme should be diverse across multiple dimensions: affiliation, seniority, topic, theory vs. practice. PhD students should be encouraged to speak as should speakers from industry. Those who have offered talks at previous meetings, but who were unable to give them because the programme was full should be prioritised.

- If you receive too few proposals then send out a reminder in good time. It's worth contacting people individually, particularly if you know they're working on an area that is likely to be of interest to the SPLS community.

- Once you have a few talk proposals, you can start putting together a programme. Talks should be *about* half an hour each, including questions, and there should be breaks every two to three talks. Make sure to put your programme up on the website!

- You will also need to organise session chairs to keep time and ask questions if none are forthcoming. Typically, the organisers will chair some sessions.

- Invited speakers aren't necessary, but if there are visiting researchers in Scotland at the time of SPLS (e.g., SICSA Distinguished Visiting Fellows), it's a good idea to invite them.

- When held in-person SPLS is typically an afternoon event starting with lunch. Sometimes the programme has extended a little into the morning, but it is important not to start too early in order to allow people to travel to the meeting in good time (ideally off-peak).

- When held online it is best to err on the side of a shorter programme and to keep sessions short (ideally no more than 60 minutes with 30 minute breaks in between) in order to reduce digital fatigue.

## The place
There's a big difference between *in-person* and *online* events.

### In-Person
The in-person meetings are hosted on the premises of the organising university. They start with a catered lunch and end with a dinner and pub social.

1. Make a **room booking** with your university.
2. Ensure you have **funding** for catering (lunch and coffee breaks). Your university admin staff will be able to get you quotes. In the past, attendance has been around 60 people, although it remains to be seen how this will pan out post-pandemic. The best funding route is via SICSA [theme event funding][sicsa-theme]. If SICSA do not have funding, then it may be the case that your institution has some funding available, or you can try asking someone at your institution who holds an SPLS-aligned research grant. Make sure you acknowledge funders on relevant materials (website, signage, etc.)
3. Make a **lunch booking** with your university catering; make sure to pass on any dietary restrictions.
4. Make a **dinner reservation**; decide on a restaurant, reach out to the restaurant to ask whether they can cater to people with the indicated dietary restrictions, and make a reservation for the number of people who've registered for dinner.

### Online
Online meetings are hosted using a teleconference service (typically Zoom) and live-streamed via the SPLS [YouTube channel][spls-youtube]. Breaks and the post-seminar social take place in the SPLS pub on [Gather Town][spls-gather-town]. (The Gather Town link isn't published here, since the link itself provides access to the room. Ask the organisers of the previous online SPLS for the link.) After each talk, questions may be asked either directly on Zoom or via the stream on Zulip. (Please make sure to create a fresh topic for each talk.) When asking questions via text chat, participants should be instructed to use the following convention:
* if you would like to read out your question yourself (on Zoom) then prefix it with "Q:"
* if you would like the chair to read it out then prefix it with "SQ:" (silent question)

### Online todo-list template

Here is a template for all the steps you need to take in order to organise the online version of SPLS

#### 4 weeks prior

- [ ] Check deadline for ICFP
- [ ] Check deadline for OOPLA
- [ ] Check deadline for PLDI
- [ ] Check deadline for POPL
- [ ] Get access to Gather
- [ ] Get access to YouTube
- [ ] Get access to Zoom or other distribution platform
- [ ] Decide on the schedule
- [ ] Update the website with a new page for the event
   - [ ] Insert the schedule with placeholders

#### 2 weeks prior

- [ ] Obtain title and abstract from invited speaker
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

#### A couple days prior
- [ ] Send reminder email
- [ ] Send reminded to SPLS-Zulip
- [ ] Ask speakers about pre-meeting by email
- [ ] Ask speakers about pre-meeting on Zulip

#### On the day of the event

- [ ] Check the speaker's setup, confirm their preferences for: streaming, recording, questions (do they
      want the host to relay questions from the chat or will they pick questions themselves? Do they want
      the audience to interrupt the talk or would they rather have the questions be held until the end?)
- [ ] Send the links 30m before the event

#### For each talk during the event

- [ ] Create a new thread in the channel for the event
- [ ] start the youtube streaming 
- [ ] share the youtube stream on the thread for the talk and in the 


[sicsa-theme]: https://www.sicsa.ac.uk/research/theory-modelling-computation/
[spls-zulip]: https://spls.zulipchat.com/
[spls-mailing-list]: mailto:spls@lists.cent.gla.ac.uk
[spls-website]: https://spls-series.github.io/
[spls-youtube]: https://www.youtube.com/channel/UCBcLg-U3OjT49mC3xV7gGWA
[spls-gather-town]: https://gather.town
[doodle]: http://doodle.com/
