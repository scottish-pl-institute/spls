---

title: "SPLS, 22 November 2023, University of Strathclyde"
custom_css: custom
---

# Scottish Programming Languages Seminar

## Wednesday, 22nd November 2023

The [Scottish Programming Languages Seminar (SPLS)](https://scottish-pl-institute.github.io/spls) Series is an informal meeting of the [Scottish Programming Languages Institute (SPLI)](https://scottish-pl-institute.github.io/) Community for discussing anything related to programming languages.

This edition of SPLS will be hybrid and is organised by the [MSP Group](https://msp.cis.strath.ac.uk) of the Department of Computer & Information Sciences at [University of Strathclyde](https://www.strath.ac.uk).

We will be physically located in the **McCance Building, room MC301** at the University of Strathclyde for the main event.
Note that the PhD Event in the morning will be held in **room MC316**.
Accessibility information is [available here](https://www.accessable.co.uk/university-of-strathclyde-glasgow/).

For online participants we will stream the talks using [YouTube](https://www.youtube.com/@scottishprogramminglanguag8396).

We kindly acknowledge the continuing sponsorship of the [Scottish Informatics and Computer Science Alliance (SICSA)](https://sicsa.ac.uk).

<div class="header">
      <a href="https://www.sicsa.ac.uk/"><img class="logo" src="../../../assets/images/sicsalogo.png" alt="SICSA Logo"></a>
      &nbsp;&nbsp;
            &nbsp;&nbsp;
                  &nbsp;&nbsp;
                        &nbsp;&nbsp;
        <a href="https://www.strath.ac.uk">
        <img class="logo" src="../../../assets/images/strathclyde.jpg" alt="University of Strathclyde">
        </a>
    </div>

## Registration

+ If you plan to attend in person register by the **8th November 2023** using [this form](https://forms.office.com/e/qwExcRjAtg).
+ If you wish to give a talk then please indicate it in the above form. If your title or abstract is yet to be determined, they can be sent by the **15th November 2023** per email to one of the organizers.
+ If you want to attend the morning PhD event, please also fill in your name by the **8th November 2023** [here](https://forms.office.com/e/jP6C5NP5tM).
+ Registration is required for catering.


### COVID Information

+ There are no COVID restrictions on attendance, however, we welcome mask wearing in packed indoor areas as well as testing on the morning prior to attending.

## Programme
### 10:00&mdash;12:00 &nbsp;&nbsp; PhD EVENT (MC316)

<table>
      <tr>
      <td class="phdevent">
        In-person event for PhD students in <strong>MC316</strong>.
          <ul>
            <li>10:00 - 10:30 &nbsp;&nbsp; Coffee and welcome </li>
            <li>10:30 - 11:30 &nbsp;&nbsp; University and SPLI presentation </li>
            <li>11:30 - 12:00 &nbsp;&nbsp; Live Q&A </li>
          </ul>
        </td>
      </tr>
</table>

### 12:00&mdash;13:00 &nbsp;&nbsp; Lunch (MC301)
### 13:00&mdash;14:00 &nbsp;&nbsp; Session 1: Behaviour (MC301)
<table>
<tr>
<td>
13:00&mdash;13:30
</td>
<td class="author"> Ross Horne (University of Strathclyde) </td>
<td class="title">
<span>
Reasoning about Privacy using Bisimilarity Congruences
</span>
<div class="abstract" id="RossHorne/button">
<button onclick="showAbstract('RossHorne')">Abstract</button>
</div>
<div class="abstract" id="RossHorne/abstract" style="display:none;">
<button onclick="hideAbstract('RossHorne')">Hide Abstract</button>
<p>
Privacy problems such as unlinkability (the inability of an attacker to link two sessions involving the same agent) can be expressed as an equivalence problem (c.f. Arapinis et al.). This formulation of unlinkability has been a stimulator for all sorts of problems in the foundations of concurrency theory, in logic, and other aspects of symbolic reasoning that feed into tool support for verification; with nuances guided strongly by problems arising in the design of privacy-preserving protocols. I'll provide a brief overview of a few guiding protocol problems mainly concerning privacy-preserving smartcards (inviting the listener to elaborate on those that interest them). However, I'll zoom in on a neat observation that some protocols can exploit compositional reasoning to reduce the size of proofs and simplify their structure when verifying unlinkability problems. This is done by employing a suitable congruence as the notion of equivalence, where the equivalence also reflects a realistic threat model.
</p>
</div>
</td>
</tr>
<tr>
<td>
13:30&mdash;14:00
</td>
<td class="author"> Danel Ahman (University of Ljubljana, Slovenia) </td>
<td class="title">
<span>
When programs have to watch paint dry
</span>
<div class="abstract" id="DanelAhman/button">
<button onclick="showAbstract('DanelAhman')">Abstract</button>
</div>
<div class="abstract" id="DanelAhman/abstract" style="display:none;">
<button onclick="hideAbstract('DanelAhman')">Hide Abstract</button>
<p>
In this talk I will discuss how one can use types and effect systems to modularly specify and check when programs are allowed to use their resources, e.g., when programming a robot arm on a production line, it is crucial that painted parts are given enough time to dry before assembly. In particular, I will show how an effectful λ-calculus based on a time-graded variant of Fitch-style modal types allows one to capture such temporal resources. Importantly, waiting for resources to become available does not necessarily have to be spent idly looking around, but the programs can instead do other useful work. <br/><br/>
A neat feature of the calculus is that it includes a temporally aware variant of graded algebraic effects and effect handlers. The former are given a novel temporal treatment in which operations' continuations know that an operation's worth of additional time has passed before they resume execution, making it possible to safely access further temporal resources in them, and where effect handlers have to respect this temporal discipline. I will also discuss a presheaves-based denotational semantics and a stateful operational semantics for this calculus (the latter is joint work with Gašper Žajdela).

</p>
</div>
</td>
</tr>
</table>

### 14:00&mdash;14:30 &nbsp;&nbsp; Coffee
### 14:30&mdash;16:00 &nbsp;&nbsp; Session 2: Datatypes (MC301)
<table>
<tr>
<td>
14:30&mdash;15:00
</td>
<td class="author"> Vikraman Choudhury (University of Glasgow) </td>
<td class="title">
<span>
An abstract look at commutativity
</span>
<div class="abstract" id="VikramanChoudhury/button">
<button onclick="showAbstract('VikramanChoudhury')">Abstract</button>
</div>
<div class="abstract" id="VikramanChoudhury/abstract" style="display:none;">
<button onclick="hideAbstract('VikramanChoudhury')">Hide Abstract</button>
<p>
Lists as free monoids are a well-known construction in type theory. Adding the commutativity axiom to monoids makes things unpleasant. In this talk, I will show how to go from free monoids to free commutative monoids, working in univalent type theory. I will discuss various constructions of free commutative monoids, and the abstract properties they satisfy. I will show implementations and applications of these ideas in Cubical Agda.

</p>
</div>
</td>
</tr>
<tr>
<td>
15:00&mdash;15:30
</td>
<td class="author"> Anton Lorenzen (University of Edinburgh) </td>
<td class="title">
<span>
The Functional Essence of Imperative Binary Search Trees
</span>
<div class="abstract" id="AntonLorenzen/button">
<button onclick="showAbstract('AntonLorenzen')">Abstract</button>
</div>
<div class="abstract" id="AntonLorenzen/abstract" style="display:none;">
<button onclick="hideAbstract('AntonLorenzen')">Hide Abstract</button>
<p>
Algorithms on restructuring binary search trees are typically presented in imperative pseudocode. Understandably so, as their performance relies on in-place execution, rather than the repeated allocation of fresh nodes in memory. Unfortunately, these imperative algorithms are notoriously difficult to verify as their loop invariants must relate the unfinished tree fragments being rebalanced. This paper presents several novel functional algorithms for accessing and inserting elements in a restructuring binary search tree that are as fast as their imperative counterparts; yet the correctness of these functional algorithms is established using a simple inductive argument. For each data structure, move-to-root, splay, and zip trees, this paper describes both a bottom-up algorithm using zippers and a top-down algorithm using a novel first-class constructor context primitive. The functional and imperative algorithms are equivalent: we mechanised the proofs establishing this in the Coq proof assistant using the Iris framework. <br/><br/>
This yields a first fully verified implementation of well known algorithms on binary search trees.

</p>
</div>
</td>
</tr>
<tr>
<td>
15:30&mdash;16:00
</td>
<td class="author"> Joseph Eremondi (University of Edinburgh) </td>
<td class="title">
<span>
Coverage Semantics for Dependent Pattern Matching
</span>
<div class="abstract" id="JosephEremondi/button">
<button onclick="showAbstract('JosephEremondi')">Abstract</button>
</div>
<div class="abstract" id="JosephEremondi/abstract" style="display:none;">
<button onclick="hideAbstract('JosephEremondi')">Hide Abstract</button>
<p>
Dependently-typed systems like Agda and Idris elaborate nested dependent pattern matching to a system of top-level patterns. Semantics for pattern matching is then given via a translation into a core calculus with eliminators: primitive fold-like functions with a one-to-one correspondence between branches and the scrutinee type’s constructors. More sophisticated forms of matching are given semantics indirectly: matches with nested patterns, multiple scrutinees, or impossible cases are elaborated to eliminators. <br/><br/>
We propose a direct semantics for top-level dependent pattern matching that avoids this elaboration step. Matching is parameterized over an axiomatic notion of “coverage” that dictates which sets of patterns form a valid left-hand-side for a match, making no assumptions about whether they correspond to constructors for an inductive type. Using the language of sheaf theory, we provide criteria for coverages that are sufficient to give semantics to pattern matching, as well as some techniques for deriving new coverages from old ones.

</p>
</div>
</td>
</tr>
</table>

### 16:00&mdash;16:30 &nbsp;&nbsp; Coffee
### 16:30&mdash;17:30 &nbsp;&nbsp; Session 3: Well-scoped (MC301)
<table>
<tr>
<td>
16:30&mdash;17:00
</td>
<td class="author"> Cristina Matache (University of Edinburgh) </td>
<td class="title">
<span>
Scoped effects as parameterized algebraic theories
</span>
<div class="abstract" id="CristinaMatache/button">
<button onclick="showAbstract('CristinaMatache')">Abstract</button>
</div>
<div class="abstract" id="CristinaMatache/abstract" style="display:none;">
<button onclick="hideAbstract('CristinaMatache')">Hide Abstract</button>
<p>
This talk is about algebraic theories and effect handlers. Algebraic theories provide a way of axiomatizing computational effects using operations and equations, where operations are basic programming features like reading and updating the state, and equations specify observably equivalent programs. Effect handlers provide a way of implementing effectful operations and of modularly programming with them. I will recall parameterized algebraic theories, a generalization of algebraic theories, and scoped effects, an extension of effect handlers. For example, exception catching which is traditionally not algebraic can be implemented as a scoped operation. I will then argue by example that scoped effects can be axiomatized using parameterized algebraic theories, thus obtaining equational characterizations of existing models of scoped effects.

</p>
</div>
</td>
</tr>
<tr>
<td>
17:00&mdash;17:30
</td>
<td class="author"> Jan van Brügge (Heriot-Watt University) </td>
<td class="title">
<span>
A new framework for defining binding-aware datatypes
</span>
<div class="abstract" id="JanvanBrügge/button">
<button onclick="showAbstract('JanvanBrügge')">Abstract</button>
</div>
<div class="abstract" id="JanvanBrügge/abstract" style="display:none;">
<button onclick="hideAbstract('JanvanBrügge')">Hide Abstract</button>
<p>
In this talk I present a framework for Isabelle/HOL for defining and reasoning about binding-aware datatypes. Compared to previous frameworks (namely Nominal2), our system has several improvements. First, it allows to nest recursion through other datatypes which greatly improve reuse of existing theorems. The framework also allows to bind through quotients and other non-free datatypes and it generalizes to infinite types/codatatypes. We also identified conditions for improving inductive predicates that involve binders so their induction theorem observes the variable convention.

</p>
</div>
</td>
</tr>
</table>
### 17:30&mdash;late &nbsp;&nbsp; Dinner/Pub

## Travel

The University of Strathclyde is located a short (five minutes) walk from Glasgow Queen Street, heading east from the City Centre. Glasgow Central Station is 15 minutes away.
The University provides [travel information](https://www.strath.ac.uk/maps/) including maps and directions.

The McCance Building on the map ([larger version](https://www.openstreetmap.org/?mlat=55.86127&mlon=-4.24475#map=17/55.86127/-4.24475)):

<div class="map" style="width: 800px; text-align: center;">
      <iframe width="800" height="400" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.248393774032594%2C55.85975505996792%2C-4.241098165512086%2C55.862789647739675&amp;layer=mapnik&amp;marker=55.86127145065651%2C-4.244746050000003" style="border: 1px solid black">
      </iframe>
</div>

## Organising Committee

Should you have comments or queries about the event please contact one of the organisers:

+ **Principal**: Riu Rodríguez Sakamoto \<riu.rodriguez-sakamoto AT strath DOT ac DOT uk\>, Dilsat Yuksel \<dilsat.yuksel AT strath DOT ac DOT uk\>
+ **Junior**: Jan de Muijnck-Hughes, Fredrik Nordvall Forsberg
