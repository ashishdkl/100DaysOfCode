
## getElementsByClassName()

* Selects ALL elements with given class name
* Returns HTMLCollection (LIVE collection)
* No dot (.) needed

Example:
document.getElementsByClassName("box");


## querySelector()

* Selects ONLY FIRST matching element
* Uses CSS selector syntax (. # tag)
* Returns single element (or null)

Example:
document.querySelector(".box");

## querySelectorAll()

* Selects ALL matching elements
* Returns NodeList (NOT live)
* Uses CSS selector syntax

Example:
document.querySelectorAll(".box");

## Quick Summary

* getElementsByClassName → ALL elements (LIVE HTMLCollection)
* querySelector → FIRST element only
* querySelectorAll → ALL elements (static NodeList)
