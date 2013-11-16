---
layout: default
title: "Kirupa Playground Free Play"
permalink: index.html
---

Kirupa Playground Free Play
===========================

No rules, no restrictions, anything goes, learn as you go, and try not to hurt anyone.


Things to Know
--------------


**Repository Setup**

The default branch is: `gh-pages`.  This means everything that goes into the repo can be accessed over http through:

* http://kirupa-racquet-club.github.io/kirupa-tennis-free-play/


**Using Git**

If you're new to git, a pretty good resource is:

* http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide

There's a lot to digest, but you can find something basic to start from in the list there (or find something that fits your comfort level of learning).  A basic workflow for working with files in this repo would be something like (via the command line which is often recommended for first time users of git):


* Get repo files:

```
> git clone https://github.com/kirupa-racquet-club/kirupa-tennis-free-play.git
> cd kirupa-tennis-free-play
```

You only need to clone once. This brings everything from the server down to your hard drive. Further updates are handled through `pull`.

* Committing source-controlled changes locally:

```
> git add -A
> git commit -am "This describes the changes I made"
```

Note: `git add -A` (add all) is only needed if you created new files, otherwise the `a` flag handles this for changed files in the `commit` command.

* Getting up-to-date files from server (generally commit your files first):

```
> git pull
```

* Sending your commited changes to server:

```
> git pull
> git push origin gh-pages
```

A `pull` is called first to make sure you capture any changes from the server since the last time you pulled.  With any luck, file merging will be automatic and painless and you can immediately update the server with your changes.
