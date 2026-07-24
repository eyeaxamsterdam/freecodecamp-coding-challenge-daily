/*
Email Validator
Given a string, determine if it is a valid email address using the following constraints:

It must contain exactly one @ symbol.
The local part (before the @):
    Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
    Cannot start or end with a dot.
The domain part (after the @):
    Must contain at least one dot.
    Must end with a dot followed by at least two letters.
Neither the local or domain part can have two dots in a row.
*/

function validate(email) {
    console.log('checking email.... ', email)
    let valid = true;
    let regex = /[a-zA-Z0-9._-]+$/
    let regexDots = /^\./
    let splitEmail = email.split('@');
    if ('two dots',/\.\./.test(email)) {
        console.log('Can\'t have two dots in a row')
        return false;
    }
    if (splitEmail.length != 2) {
        console.log('exactly one @ symbol: ', email)
        return false;
    }
    if (!regex.test(splitEmail[0])) {
        console.log('cant contain garbage: ', email)
        return false;
    }
    if (splitEmail[0][0] === '.' || splitEmail[0][splitEmail[0].length -1] === '.') {
        console.log('can\'t start or end with dot: ', email);
        return false
    }
    if (regexDots.test(splitEmail[1])) {
        console.log('at least one dot');
        return false;
    }
    if (splitEmail[1].lastIndexOf('.') >= splitEmail[1].length - 2 || /[^a-zA-Z]/g.test(splitEmail[1].slice(splitEmail[1].lastIndexOf('.')+1))) {
        console.log('must end with a dot and two more letters')
        return false;
    } else return valid
}

//Tests
validate("a@bc.d") //should return true.
validate("hell.-w.rld@example.com") //should return true.
validate(".b@sh.rc") //should return false.
validate("example@test.c0") //should return false.
validate("freecodecamp.org") //should return false.
validate("develop.ment_user@c0D!NG.R.CK0S") //should return true
validate("hello.@wo.rld") //should return false.
validate("hello@world..com") //should return false.
validate("git@commit@push.io") //should return false.