/* eslint-disable no-useless-escape */
// I don't love turning this off, but when it comes to regex,
// I just copy/paste the one with the most upvotes from stackoverflow.
export const IP_REGEX = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;
export const DOMAIN_REGEX = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
