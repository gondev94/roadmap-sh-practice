function getDisplayName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getLocation(user) {
    return `${user.address.city}, ${user.address.country}`
}

function getContactSummary(user) {
  return `${user.email} | ${user.phone}`
}

function isAccountActive(user) {
    return user.isActive ? 'Active' : 'Inactive';
}

function createProfileSummary(user) {
    return `    
    ${getDisplayName(user)}
    Location: ${getLocation(user)}
    Contact: ${getContactSummary(user)}
    Account Status: ${isAccountActive(user)}
    `;
}
