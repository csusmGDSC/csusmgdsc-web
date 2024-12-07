export const socials = {
  github: "https://github.com/csusmGDSC",
  teams:
    "https://teams.microsoft.com/l/team/19%3A7u6FOYbIkk7NLclaCv9ucmdDrPBkvXReZm2ixYlEe601%40thread.tacv2/conversations?groupId=8ca48579-37f4-4060-9bf3-cfca2a74f25e&tenantId=128753ab-cb28-4f82-9733-2b9b91d2aca9",
  instagram: "https://www.instagram.com/gdsc.csusm/",
  twitter: "https://twitter.com/dsccsusm?lang=en",
};

// Convert the object to an array of objects
export const socialsList = Object.entries(socials).map(([social, link]) => ({
  social,
  link,
}));
