=====
fxpay
=====

JavaScript library to support `Firefox Marketplace`_ payments in
a web application.

.. image:: https://travis-ci.org/mozilla/fxpay.svg?branch=master
    :target: https://travis-ci.org/mozilla/fxpay
.. image:: https://badge.fury.io/bo/fxpay.svg
    :target: http://badge.fury.io/bo/fxpay

Usage
=====

This is a complete guide to usage:
https://developer.mozilla.org/en-US/Marketplace/Monetization/In-app_payments_section/fxPay_iap

Examples
========

You can find working code in the
`example <https://github.com/mozilla/fxpay/tree/master/example/>`_
directory of this repository.

FxPay Developers
================

To hack on this library you need `NodeJS`_ and `npm`_ installed.
After cloning the source, cd to the root and install all dependencies::

    npm install

To execute scripts, you should add the local ``.bin`` directory to
your ``$PATH``::

    PATH="./node_modules/.bin:${PATH}"
    export PATH

This is pretty standard for any Node project so you you might already have it.

To test that you have your path set up, type ``which grunt`` and make
sure you see a path to the executable.

Compression
~~~~~~~~~~~

To build yourself a compressed version of ``fxpay.js``, run this::

    grunt compress

The compressed source file will appear in the ``build`` directory
as ``fxpay.min.js``. You'll also get a `source map`_ file in
the same directory as ``fxpay.min.js.map``.

**IMPORTANT**: To use this library in a web page you have to
compress it first because the source code spans multiple files.
The usage instructions above explain how to install public releases from
Bower which is of course easier.

.. _`source map`: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/

Running Tests
~~~~~~~~~~~~~

From a source checkout, run all tests and lint checks like this::

    grunt test

To run the JavaScript unit tests continuously while you are developing, type::

    grunt karma:dev

This opens a web browser and will report test results to your console.
As you edit a code file, it will re-run the tests.
**NOTE**: this can be buggy sometimes.

To fire off a single test run with a browser and see the results, type::

    grunt karma:run

Here's how to run a specific test file::

    grunt karma:run --tests tests/test-get-products.js

You can also use grep patterns to match files::

    grunt karma:run --tests 'tests/test-get-*'

If you want to run a specific test function, you can use
a grep pattern to match the name in the ``describe()`` or ``it()``
definition. For example, run all tests under
``describe('fxpay.purchase()')`` like this::

    grunt karma:run --grep='fxpay.purchase()'

or run a test defined as ``it('should open a payment window on the web')``
like this::

    grunt karma:run --grep='should open a payment window on the web'

Check For Lint
~~~~~~~~~~~~~~

To check for syntax errors (lint), run::

    grunt jshint

Create A Release
~~~~~~~~~~~~~~~~

You have to do a couple things to create a release:

* Run ``grunt release``. This compresses the files and copies them to the dist dir.
* Commit and push your changes.
* Add and push a git tag corresponding to the version number so that bower
  picks up the file. For example, to tag a ``0.0.1`` release run
  ``git tag 0.0.1 && git push upstream 0.0.1``
* Add a release here: https://github.com/mozilla/fxpay/releases
  (leave the title blank or just use the version number).
* Bump the version for the next release. Library version numbers are
  managed in multiple files.
  To increment the version number and update all files at once,
  run ``grunt bump``.
* Commit and push your changes.


Changelog
=========

See https://github.com/mozilla/fxpay/releases

.. _`Firefox Marketplace`: https://marketplace.firefox.com/
.. _`Firefox Marketplace Developer Hub`: https://marketplace.firefox.com/developers/
.. _`NodeJS`: http://nodejs.org/
.. _`npm`: https://www.npmjs.org/
.. _`mozPay()`: https://developer.mozilla.org/en-US/docs/Web/API/Navigator.mozPay
.. _`window.console`: https://developer.mozilla.org/en-US/docs/Web/API/console
