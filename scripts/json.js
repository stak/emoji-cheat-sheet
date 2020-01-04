/**
 * @typedef {Array<string[]>} GithubEmojiIds
 */

/**
 * @param {{ [category: string]: { [subcategory: string]: GithubEmojiIds } }} categorizedGithubEmojiIds
 */
function generateCheatSheet(categorizedGithubEmojiIds) {
  return JSON.stringify(categorizedGithubEmojiIds, undefined, 2);
}

module.exports = {
  generateCheatSheet
};
