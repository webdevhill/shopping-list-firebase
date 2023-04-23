let scrimbaUsers = {
    '00': '0@test.com',
    '01': '1@test.com',
    '02': '2@test.com'
}

let scrimbaUsersemails = (Object.values(scrimbaUsers));
let scrimbaUsersIDs = (Object.keys(scrimbaUsers));
let scrimbaUserEntries = (Object.entries(scrimbaUsers));

console.log(scrimbaUsersemails);
console.log(scrimbaUsersIDs);
console.log(scrimbaUserEntries);